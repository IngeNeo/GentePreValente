"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StateWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_StateFilter_1 = require("../inputs/NestedEnumEnum_StateFilter");
const NestedEnumEnum_StateWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_StateWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_State_1 = require("../../enums/Enum_State");
let EnumEnum_StateWithAggregatesFilter = class EnumEnum_StateWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_StateWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_StateWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_StateWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateWithAggregatesFilter_1.NestedEnumEnum_StateWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateWithAggregatesFilter_1.NestedEnumEnum_StateWithAggregatesFilter)
], EnumEnum_StateWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_StateWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter)
], EnumEnum_StateWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter)
], EnumEnum_StateWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_StateWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_StateWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_StateWithAggregatesFilter);
exports.EnumEnum_StateWithAggregatesFilter = EnumEnum_StateWithAggregatesFilter;
