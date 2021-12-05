"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_IdentificationTypeFieldUpdateOperationsInput");
const EnumEnum_StateFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_StateFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CompanyUpdateManyMutationInput = class CompanyUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1.EnumEnum_IdentificationTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_IdentificationTypeFieldUpdateOperationsInput_1.EnumEnum_IdentificationTypeFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_StateFieldUpdateOperationsInput_1.EnumEnum_StateFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_StateFieldUpdateOperationsInput_1.EnumEnum_StateFieldUpdateOperationsInput)
], CompanyUpdateManyMutationInput.prototype, "state", void 0);
CompanyUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpdateManyMutationInput", {
        isAbstract: true
    })
], CompanyUpdateManyMutationInput);
exports.CompanyUpdateManyMutationInput = CompanyUpdateManyMutationInput;
