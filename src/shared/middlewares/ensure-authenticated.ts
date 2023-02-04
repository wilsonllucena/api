import { AccountPrismaRepository } from '@src/modules/accounts/repositories/account.prisma.repository';
import { Request, Response, NextFunction } from 'express';
import authConfig from '@src/config/auth';
import { verify } from 'jsonwebtoken';
import { container } from 'tsyringe';
import { httpStatus } from '../util/http-status-code';
import logger from '../logger';
interface Payload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> {
  const authHeader = request.headers.authorization;
  const { secret } = authConfig.jwt;
  if (!authHeader) {
    return response.status(httpStatus.UNAUTHORIZED).json({
      message: 'Token is missing',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    logger.info('Verifying token');
    const { sub: user_id } = verify(token, secret) as Payload;

    const userRepository = container.resolve(AccountPrismaRepository);
    const user = await userRepository.findById(Number(user_id));

    if (!user) {
       logger.error('User does not exists');
        return response.status(httpStatus.UNAUTHORIZED).json({
          message: 'User does not exists',
        });
    }

    request.user = {
      id: Number(user_id),
    };
    logger.info('Token verified');
    next();
  } catch {
    logger.error('Invalid token');
    return response.status(httpStatus.UNAUTHORIZED).json({
      message: 'Invalid token',
    });
  }
}
