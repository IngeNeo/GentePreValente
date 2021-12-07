"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MultimediaCountOrderByAggregateInput = class MultimediaCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCountOrderByAggregateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCountOrderByAggregateInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCountOrderByAggregateInput.prototype, "companyId", void 0);
MultimediaCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCountOrderByAggregateInput", {
        isAbstract: true
    })
], MultimediaCountOrderByAggregateInput);
exports.MultimediaCountOrderByAggregateInput = MultimediaCountOrderByAggregateInput;
