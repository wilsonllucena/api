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
exports.GetAccountUseCase = void 0;
const either_1 = require("@src/shared/errors/either");
const app_error_1 = require("@src/shared/util/app-error");
const http_status_code_1 = require("@src/shared/util/http-status-code");
const tsyringe_1 = require("tsyringe");
let GetAccountUseCase = class GetAccountUseCase {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute(id) {
        const result = await this.accountRepository.findById(id);
        if (!result) {
            return (0, either_1.left)(new app_error_1.AppError('Usuário não foi encontrado', http_status_code_1.httpStatus.NOT_FOUND));
        }
        return (0, either_1.right)({
            account: result,
        });
    }
};
GetAccountUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('AccountRepository')),
    __metadata("design:paramtypes", [Object])
], GetAccountUseCase);
exports.GetAccountUseCase = GetAccountUseCase;
//# sourceMappingURL=get-user.usecase.js.map