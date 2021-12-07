"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MultimediaMaxOrderByAggregateInput = class MultimediaMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxOrderByAggregateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxOrderByAggregateInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxOrderByAggregateInput.prototype, "companyId", void 0);
MultimediaMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaMaxOrderByAggregateInput", {
        isAbstract: true
    })
], MultimediaMaxOrderByAggregateInput);
exports.MultimediaMaxOrderByAggregateInput = MultimediaMaxOrderByAggregateInput;
