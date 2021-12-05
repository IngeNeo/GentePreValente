"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_IdentificationTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_IdentificationTypeFilter_1 = require("../inputs/NestedEnumEnum_IdentificationTypeFilter");
const NestedEnumEnum_IdentificationTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_IdentificationTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
let EnumEnum_IdentificationTypeWithAggregatesFilter = class EnumEnum_IdentificationTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeWithAggregatesFilter_1.NestedEnumEnum_IdentificationTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeWithAggregatesFilter_1.NestedEnumEnum_IdentificationTypeWithAggregatesFilter)
], EnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter)
], EnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter)
], EnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_IdentificationTypeWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_IdentificationTypeWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_IdentificationTypeWithAggregatesFilter);
exports.EnumEnum_IdentificationTypeWithAggregatesFilter = EnumEnum_IdentificationTypeWithAggregatesFilter;
