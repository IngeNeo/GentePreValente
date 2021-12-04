"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaOrderByRelationAggregateInput_1 = require("../inputs/MultimediaOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyOrderByWithRelationInput = class CompanyOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "nit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaOrderByRelationAggregateInput_1.MultimediaOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaOrderByRelationAggregateInput_1.MultimediaOrderByRelationAggregateInput)
], CompanyOrderByWithRelationInput.prototype, "multimedia", void 0);
CompanyOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyOrderByWithRelationInput", {
        isAbstract: true
    })
], CompanyOrderByWithRelationInput);
exports.CompanyOrderByWithRelationInput = CompanyOrderByWithRelationInput;
