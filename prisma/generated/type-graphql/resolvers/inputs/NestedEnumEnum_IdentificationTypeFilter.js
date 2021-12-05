"use strict";
var NestedEnumEnum_IdentificationTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_IdentificationTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
let NestedEnumEnum_IdentificationTypeFilter = NestedEnumEnum_IdentificationTypeFilter_1 = class NestedEnumEnum_IdentificationTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_IdentificationTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_IdentificationTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_IdentificationType_1.Enum_IdentificationType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_IdentificationTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_IdentificationTypeFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_IdentificationTypeFilter)
], NestedEnumEnum_IdentificationTypeFilter.prototype, "not", void 0);
NestedEnumEnum_IdentificationTypeFilter = NestedEnumEnum_IdentificationTypeFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_IdentificationTypeFilter", {
        isAbstract: true
    })
], NestedEnumEnum_IdentificationTypeFilter);
exports.NestedEnumEnum_IdentificationTypeFilter = NestedEnumEnum_IdentificationTypeFilter;
