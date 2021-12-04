"use strict";
var NestedEnumEnum_StateWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_StateWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_StateFilter_1 = require("../inputs/NestedEnumEnum_StateFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_State_1 = require("../../enums/Enum_State");
let NestedEnumEnum_StateWithAggregatesFilter = NestedEnumEnum_StateWithAggregatesFilter_1 = class NestedEnumEnum_StateWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_StateWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_StateWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_StateWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateWithAggregatesFilter)
], NestedEnumEnum_StateWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_StateWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter)
], NestedEnumEnum_StateWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter)
], NestedEnumEnum_StateWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_StateWithAggregatesFilter = NestedEnumEnum_StateWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_StateWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_StateWithAggregatesFilter);
exports.NestedEnumEnum_StateWithAggregatesFilter = NestedEnumEnum_StateWithAggregatesFilter;
