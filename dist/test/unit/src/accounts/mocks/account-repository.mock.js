"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const accountRepositoryMock = {
    create: jest.fn(),
    list: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
    findByDocument: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
};
exports.default = accountRepositoryMock;
//# sourceMappingURL=account-repository.mock.js.map