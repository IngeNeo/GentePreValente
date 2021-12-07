"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MultimediaMinOrderByAggregateInput = class MultimediaMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinOrderByAggregateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinOrderByAggregateInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinOrderByAggregateInput.prototype, "companyId", void 0);
MultimediaMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaMinOrderByAggregateInput", {
        isAbstract: true
    })
], MultimediaMinOrderByAggregateInput);
exports.MultimediaMinOrderByAggregateInput = MultimediaMinOrderByAggregateInput;
