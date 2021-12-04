"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCountOrderByAggregateInput_1 = require("../inputs/MultimediaCountOrderByAggregateInput");
const MultimediaMaxOrderByAggregateInput_1 = require("../inputs/MultimediaMaxOrderByAggregateInput");
const MultimediaMinOrderByAggregateInput_1 = require("../inputs/MultimediaMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MultimediaOrderByWithAggregationInput = class MultimediaOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithAggregationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithAggregationInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaOrderByWithAggregationInput.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCountOrderByAggregateInput_1.MultimediaCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCountOrderByAggregateInput_1.MultimediaCountOrderByAggregateInput)
], MultimediaOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaMaxOrderByAggregateInput_1.MultimediaMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaMaxOrderByAggregateInput_1.MultimediaMaxOrderByAggregateInput)
], MultimediaOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaMinOrderByAggregateInput_1.MultimediaMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaMinOrderByAggregateInput_1.MultimediaMinOrderByAggregateInput)
], MultimediaOrderByWithAggregationInput.prototype, "_min", void 0);
MultimediaOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaOrderByWithAggregationInput", {
        isAbstract: true
    })
], MultimediaOrderByWithAggregationInput);
exports.MultimediaOrderByWithAggregationInput = MultimediaOrderByWithAggregationInput;
