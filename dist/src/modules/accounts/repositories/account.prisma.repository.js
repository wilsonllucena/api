"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPrismaRepository = void 0;
const prismaClient_1 = __importDefault(require("@src/shared/database/prismaClient"));
const tsyringe_1 = require("tsyringe");
let AccountPrismaRepository = class AccountPrismaRepository {
    prismaService = prismaClient_1.default;
    async create(data) {
        try {
            return await this.prismaService.account.create({ data });
        }
        catch (err) {
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
    async findByEmail(email) {
        return await this.prismaService.account.findUnique({ where: { email } });
    }
    async findByDocument(document) {
        return await this.prismaService.account.findUnique({
            where: { document },
        });
    }
    async findById(id) {
        return await this.prismaService.account.findFirst({
            where: { id },
        });
    }
    async delete(id) {
        return await this.prismaService.account.delete({
            where: { id },
        });
    }
    async list() {
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
    async update(id, data) {
        return await this.prismaService.account.update({
            where: { id },
            data,
        });
    }
};
AccountPrismaRepository = __decorate([
    (0, tsyringe_1.injectable)()
], AccountPrismaRepository);
exports.AccountPrismaRepository = AccountPrismaRepository;
//# sourceMappingURL=account.prisma.repository.js.map