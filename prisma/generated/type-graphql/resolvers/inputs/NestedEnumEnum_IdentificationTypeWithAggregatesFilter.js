"use strict";
var NestedEnumEnum_IdentificationTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_IdentificationTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_IdentificationTypeFilter_1 = require("../inputs/NestedEnumEnum_IdentificationTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
let NestedEnumEnum_IdentificationTypeWithAggregatesFilter = NestedEnumEnum_IdentificationTypeWithAggregatesFilter_1 = class NestedEnumEnum_IdentificationTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeWithAggregatesFilter)
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter)
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter)
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_IdentificationTypeWithAggregatesFilter = NestedEnumEnum_IdentificationTypeWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_IdentificationTypeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_IdentificationTypeWithAggregatesFilter);
exports.NestedEnumEnum_IdentificationTypeWithAggregatesFilter = NestedEnumEnum_IdentificationTypeWithAggregatesFilter;
