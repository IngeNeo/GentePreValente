"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateOrConnectWithoutMultimediaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateWithoutMultimediaInput_1 = require("../inputs/CompanyCreateWithoutMultimediaInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateOrConnectWithoutMultimediaInput = class CompanyCreateOrConnectWithoutMultimediaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateOrConnectWithoutMultimediaInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput)
], CompanyCreateOrConnectWithoutMultimediaInput.prototype, "create", void 0);
CompanyCreateOrConnectWithoutMultimediaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateOrConnectWithoutMultimediaInput", {
        isAbstract: true
    })
], CompanyCreateOrConnectWithoutMultimediaInput);
exports.CompanyCreateOrConnectWithoutMultimediaInput = CompanyCreateOrConnectWithoutMultimediaInput;
