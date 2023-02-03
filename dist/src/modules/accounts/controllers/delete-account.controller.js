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
exports.DeleteAccountController = void 0;
const tsyringe_1 = require("tsyringe");
const http_status_code_1 = require("@src/shared/util/http-status-code");
const helpers_1 = require("../../../shared/helpers");
let DeleteAccountController = class DeleteAccountController {
    deleteAccountUseCase;
    constructor(deleteAccountUseCase) {
        this.deleteAccountUseCase = deleteAccountUseCase;
    }
    async handle(request) {
        const { params } = request;
        const { id } = params;
        const response = await this.deleteAccountUseCase.execute(Number(id));
        if (response.isLeft()) {
            return (0, helpers_1.badRequest)(response.value);
        }
        return (0, helpers_1.success)(response.value, http_status_code_1.httpStatus.NO_CONTENT);
    }
};
DeleteAccountController = __decorate([
    __param(0, (0, tsyringe_1.inject)('DeleteAccount')),
    __metadata("design:paramtypes", [Object])
], DeleteAccountController);
exports.DeleteAccountController = DeleteAccountController;
//# sourceMappingURL=delete-account.controller.js.map