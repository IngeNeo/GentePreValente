"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StateFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_StateFilter_1 = require("../inputs/NestedEnumEnum_StateFilter");
const Enum_State_1 = require("../../enums/Enum_State");
let EnumEnum_StateFilter = class EnumEnum_StateFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_StateFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_StateFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_StateFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateFilter_1.NestedEnumEnum_StateFilter)
], EnumEnum_StateFilter.prototype, "not", void 0);
EnumEnum_StateFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_StateFilter", {
        isAbstract: true
    })
], EnumEnum_StateFilter);
exports.EnumEnum_StateFilter = EnumEnum_StateFilter;
