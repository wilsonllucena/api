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
exports.ListAccountsController = void 0;
const tsyringe_1 = require("tsyringe");
const helpers_1 = require("../../../shared/helpers");
let ListAccountsController = class ListAccountsController {
    listAccountsUseCase;
    constructor(listAccountsUseCase) {
        this.listAccountsUseCase = listAccountsUseCase;
    }
    async handle() {
        const result = await this.listAccountsUseCase.execute();
        return (0, helpers_1.success)(result);
    }
};
ListAccountsController = __decorate([
    __param(0, (0, tsyringe_1.inject)('ListAccounts')),
    __metadata("design:paramtypes", [Object])
], ListAccountsController);
exports.ListAccountsController = ListAccountsController;
//# sourceMappingURL=list-accounts.controller.js.map