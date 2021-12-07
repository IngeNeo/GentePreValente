"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyOrderByWithRelationInput_1 = require("../inputs/CompanyOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MultimediaOrderByWithRelationInput = class MultimediaOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithRelationInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput)
], MultimediaOrderByWithRelationInput.prototype, "company", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithRelationInput.prototype, "companyId", void 0);
MultimediaOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaOrderByWithRelationInput", {
        isAbstract: true
    })
], MultimediaOrderByWithRelationInput);
exports.MultimediaOrderByWithRelationInput = MultimediaOrderByWithRelationInput;
