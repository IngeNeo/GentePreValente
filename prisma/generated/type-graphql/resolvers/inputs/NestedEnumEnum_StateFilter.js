"use strict";
var NestedEnumEnum_StateFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_StateFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_State_1 = require("../../enums/Enum_State");
let NestedEnumEnum_StateFilter = NestedEnumEnum_StateFilter_1 = class NestedEnumEnum_StateFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_StateFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_StateFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_State_1.Enum_State], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_StateFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_StateFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_StateFilter)
], NestedEnumEnum_StateFilter.prototype, "not", void 0);
NestedEnumEnum_StateFilter = NestedEnumEnum_StateFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_StateFilter", {
        isAbstract: true
    })
], NestedEnumEnum_StateFilter);
exports.NestedEnumEnum_StateFilter = NestedEnumEnum_StateFilter;
