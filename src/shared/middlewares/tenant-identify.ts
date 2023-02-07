import { NextFunction, Request, Response } from "express";
import PrismaService from "../database/prismaClient";

export default async function tenantSelect(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const prisma = PrismaService;
  const tenant = await prisma.tenant.findFirst({
    where: {
      name: 'tenant1',
    },
  });

  if (!tenant) {
    throw new Error('Tenant not found');
  }

  next();
};