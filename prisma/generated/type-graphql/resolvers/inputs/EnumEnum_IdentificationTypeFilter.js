"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_IdentificationTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_IdentificationTypeFilter_1 = require("../inputs/NestedEnumEnum_IdentificationTypeFilter");
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
let EnumEnum_IdentificationTypeFilter = class EnumEnum_IdentificationTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_IdentificationTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_IdentificationTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_IdentificationTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeFilter_1.NestedEnumEnum_IdentificationTypeFilter)
], EnumEnum_IdentificationTypeFilter.prototype, "not", void 0);
EnumEnum_IdentificationTypeFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_IdentificationTypeFilter", {
        isAbstract: true
    })
], EnumEnum_IdentificationTypeFilter);
exports.EnumEnum_IdentificationTypeFilter = EnumEnum_IdentificationTypeFilter;
