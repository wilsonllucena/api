import { AccountPrismaRepository } from '@src/modules/accounts/repositories/account.prisma.repository';
import { Request, Response, NextFunction } from 'express';
import authConfig from '@src/config/auth';

import { verify } from 'jsonwebtoken';
import { container } from 'tsyringe';
import { AppError } from '../util/app-error';
interface IPayload {
  sub: number;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  const { secret } = authConfig.jwt;
  if (!authHeader) {
    throw new AppError('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, secret) as any;

    const userRepository = container.resolve(AccountPrismaRepository);
    const user = await userRepository.findById(+user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Invalid token');
  }
}
