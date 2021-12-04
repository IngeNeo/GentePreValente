"use strict";
var MultimediaWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyRelationFilter_1 = require("../inputs/CompanyRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let MultimediaWhereInput = MultimediaWhereInput_1 = class MultimediaWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MultimediaWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MultimediaWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MultimediaWhereInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyRelationFilter_1.CompanyRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyRelationFilter_1.CompanyRelationFilter)
], MultimediaWhereInput.prototype, "company", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MultimediaWhereInput.prototype, "companyId", void 0);
MultimediaWhereInput = MultimediaWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaWhereInput", {
        isAbstract: true
    })
], MultimediaWhereInput);
exports.MultimediaWhereInput = MultimediaWhereInput;
