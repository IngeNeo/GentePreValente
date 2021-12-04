"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyOrderByWithRelationInput_1 = require("../../../inputs/CompanyOrderByWithRelationInput");
const CompanyWhereInput_1 = require("../../../inputs/CompanyWhereInput");
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
const CompanyScalarFieldEnum_1 = require("../../../../enums/CompanyScalarFieldEnum");
let FindFirstCompanyArgs = class FindFirstCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereInput_1.CompanyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereInput_1.CompanyWhereInput)
], FindFirstCompanyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstCompanyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], FindFirstCompanyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstCompanyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstCompanyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyScalarFieldEnum_1.CompanyScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstCompanyArgs.prototype, "distinct", void 0);
FindFirstCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstCompanyArgs);
exports.FindFirstCompanyArgs = FindFirstCompanyArgs;
