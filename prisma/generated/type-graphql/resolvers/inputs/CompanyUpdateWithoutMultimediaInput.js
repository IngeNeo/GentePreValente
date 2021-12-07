"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateWithoutMultimediaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_IdentificationTypeFieldUpdateOperationsInput");
const EnumEnum_StateFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_StateFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CompanyUpdateWithoutMultimediaInput = class CompanyUpdateWithoutMultimediaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1.EnumEnum_IdentificationTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1.EnumEnum_IdentificationTypeFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_StateFieldUpdateOperationsInput_1.EnumEnum_StateFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_StateFieldUpdateOperationsInput_1.EnumEnum_StateFieldUpdateOperationsInput)
], CompanyUpdateWithoutMultimediaInput.prototype, "state", void 0);
CompanyUpdateWithoutMultimediaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpdateWithoutMultimediaInput", {
        isAbstract: true
    })
], CompanyUpdateWithoutMultimediaInput);
exports.CompanyUpdateWithoutMultimediaInput = CompanyUpdateWithoutMultimediaInput;
