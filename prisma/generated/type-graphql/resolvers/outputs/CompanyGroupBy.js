"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyAvgAggregate_1 = require("../outputs/CompanyAvgAggregate");
const CompanyCountAggregate_1 = require("../outputs/CompanyCountAggregate");
const CompanyMaxAggregate_1 = require("../outputs/CompanyMaxAggregate");
const CompanyMinAggregate_1 = require("../outputs/CompanyMinAggregate");
const CompanySumAggregate_1 = require("../outputs/CompanySumAggregate");
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
const Enum_State_1 = require("../../enums/Enum_State");
let CompanyGroupBy = class CompanyGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyGroupBy.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyGroupBy.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyGroupBy.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyGroupBy.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyGroupBy.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyGroupBy.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCountAggregate_1.CompanyCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCountAggregate_1.CompanyCountAggregate)
], CompanyGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyAvgAggregate_1.CompanyAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyAvgAggregate_1.CompanyAvgAggregate)
], CompanyGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanySumAggregate_1.CompanySumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanySumAggregate_1.CompanySumAggregate)
], CompanyGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyMinAggregate_1.CompanyMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyMinAggregate_1.CompanyMinAggregate)
], CompanyGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyMaxAggregate_1.CompanyMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyMaxAggregate_1.CompanyMaxAggregate)
], CompanyGroupBy.prototype, "_max", void 0);
CompanyGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("CompanyGroupBy", {
        isAbstract: true
    })
], CompanyGroupBy);
exports.CompanyGroupBy = CompanyGroupBy;
