"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_IdentificationType_1 = require("../enums/Enum_IdentificationType");
const Enum_State_1 = require("../enums/Enum_State");
const CompanyCount_1 = require("../resolvers/outputs/CompanyCount");
let Company = class Company {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Company.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Company.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Company.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Company.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Company.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Company.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Company.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Company.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCount_1.CompanyCount, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCount_1.CompanyCount)
], Company.prototype, "_count", void 0);
Company = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Company", {
        isAbstract: true
    })
], Company);
exports.Company = Company;
