"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
const Enum_State_1 = require("../../enums/Enum_State");
let CompanyCreateManyInput = class CompanyCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateManyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateManyInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateManyInput.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateManyInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyCreateManyInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateManyInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateManyInput.prototype, "state", void 0);
CompanyCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateManyInput", {
        isAbstract: true
    })
], CompanyCreateManyInput);
exports.CompanyCreateManyInput = CompanyCreateManyInput;
