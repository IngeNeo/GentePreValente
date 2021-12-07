"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_IdentificationTypeFieldUpdateOperationsInput");
const EnumEnum_StateFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_StateFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MultimediaUpdateManyWithoutCompanyInput_1 = require("../inputs/MultimediaUpdateManyWithoutCompanyInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CompanyUpdateInput = class CompanyUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1.EnumEnum_IdentificationTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1.EnumEnum_IdentificationTypeFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_StateFieldUpdateOperationsInput_1.EnumEnum_StateFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_StateFieldUpdateOperationsInput_1.EnumEnum_StateFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaUpdateManyWithoutCompanyInput_1.MultimediaUpdateManyWithoutCompanyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaUpdateManyWithoutCompanyInput_1.MultimediaUpdateManyWithoutCompanyInput)
], CompanyUpdateInput.prototype, "multimedia", void 0);
CompanyUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpdateInput", {
        isAbstract: true
    })
], CompanyUpdateInput);
exports.CompanyUpdateInput = CompanyUpdateInput;
