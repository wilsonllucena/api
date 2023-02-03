import { Account } from '@prisma/client';
import PrismaService from '@src/shared/database/prismaClient';
import { injectable } from 'tsyringe';
import { AccountDTO, CreateAccountDTO, UpdateAccountDTO, UserDTO } from '../dtos/accounts.dto';
import { AccountRepository } from './account-repository.interface';


@injectable()
export class AccountPrismaRepository implements AccountRepository {
  private prismaService = PrismaService;

  async create(data: CreateAccountDTO): Promise<AccountDTO> {
    try {
      return await this.prismaService.account.create({ data });
    } catch (err: any) {
      if (err.code === 'P2002') {
        if (err.meta.target.includes('email')) {
          throw new Error('Email já cadastrado');
        }
        if (err.meta.target.includes('document')) {
          throw new Error('Documento já cadastrado');
        }
      }
      return err;
    }
  }

  async findByEmail(email: string): Promise<AccountDTO | null> {
    return await this.prismaService.account.findUnique({ where: { email } });
  }

  async findByDocument(document: string): Promise<AccountDTO | null> {
    return await this.prismaService.account.findUnique({
      where: { document },
    });
  }

  async findById(id: number): Promise<AccountDTO | null> {
    return await this.prismaService.account.findFirst({
      where: { id },
    });
  }
  async delete(id: number): Promise<AccountDTO | null> {
    return await this.prismaService.account.delete({
      where: { id },
    });
  }

  async list(): Promise<any[]> {
    return await this.prismaService.account.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        document: true,
        password: false,
        role: true,
        createdAt: true,
      },
    });
  }

  async update(id: number, data: UpdateAccountDTO): Promise<AccountDTO> {
    return await this.prismaService.account.update({
      where: { id },
      data,
    });
  }
}
