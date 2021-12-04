"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateNestedOneWithoutMultimediaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateOrConnectWithoutMultimediaInput_1 = require("../inputs/CompanyCreateOrConnectWithoutMultimediaInput");
const CompanyCreateWithoutMultimediaInput_1 = require("../inputs/CompanyCreateWithoutMultimediaInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateNestedOneWithoutMultimediaInput = class CompanyCreateNestedOneWithoutMultimediaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput)
], CompanyCreateNestedOneWithoutMultimediaInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutMultimediaInput_1.CompanyCreateOrConnectWithoutMultimediaInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateOrConnectWithoutMultimediaInput_1.CompanyCreateOrConnectWithoutMultimediaInput)
], CompanyCreateNestedOneWithoutMultimediaInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateNestedOneWithoutMultimediaInput.prototype, "connect", void 0);
CompanyCreateNestedOneWithoutMultimediaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateNestedOneWithoutMultimediaInput", {
        isAbstract: true
    })
], CompanyCreateNestedOneWithoutMultimediaInput);
exports.CompanyCreateNestedOneWithoutMultimediaInput = CompanyCreateNestedOneWithoutMultimediaInput;
