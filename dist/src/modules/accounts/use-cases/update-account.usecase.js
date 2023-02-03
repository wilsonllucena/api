"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountUseCase = void 0;
const either_1 = require("@src/shared/errors/either");
const app_error_1 = require("@src/shared/util/app-error");
const http_status_code_1 = require("@src/shared/util/http-status-code");
const tsyringe_1 = require("tsyringe");
let UpdateAccountUseCase = class UpdateAccountUseCase {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute(id, account) {
        const result = await this.accountRepository.findById(id);
        const emailExist = await this.accountRepository.findByEmail(account.email);
        const documentExist = account?.document &&
            (await this.accountRepository.findByDocument(account.document));
        if (!result) {
            return (0, either_1.left)(new app_error_1.AppError('Usuário não foi encontrado', http_status_code_1.httpStatus.NOT_FOUND));
        }
        if (documentExist && documentExist.id !== id) {
            return (0, either_1.left)(new app_error_1.AppError('Documento já está em uso', http_status_code_1.httpStatus.CONFLICT));
        }
        if (emailExist && emailExist.id !== id) {
            return (0, either_1.left)(new app_error_1.AppError('Email já está em uso', http_status_code_1.httpStatus.CONFLICT));
        }
        const updatedAccount = await this.accountRepository.update(id, account);
        return (0, either_1.right)({
            id: updatedAccount.id,
        });
    }
};
UpdateAccountUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('AccountRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateAccountUseCase);
exports.UpdateAccountUseCase = UpdateAccountUseCase;
//# sourceMappingURL=update-account.usecase.js.map