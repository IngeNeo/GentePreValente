"use strict";
var CompanyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_StateFilter_1 = require("../inputs/EnumEnum_StateFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const MultimediaListRelationFilter_1 = require("../inputs/MultimediaListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CompanyWhereInput = CompanyWhereInput_1 = class CompanyWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "nit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], CompanyWhereInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_StateFilter_1.EnumEnum_StateFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_StateFilter_1.EnumEnum_StateFilter)
], CompanyWhereInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaListRelationFilter_1.MultimediaListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaListRelationFilter_1.MultimediaListRelationFilter)
], CompanyWhereInput.prototype, "multimedia", void 0);
CompanyWhereInput = CompanyWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyWhereInput", {
        isAbstract: true
    })
], CompanyWhereInput);
exports.CompanyWhereInput = CompanyWhereInput;
