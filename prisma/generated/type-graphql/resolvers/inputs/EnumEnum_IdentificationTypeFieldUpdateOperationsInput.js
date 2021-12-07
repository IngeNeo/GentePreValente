"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_IdentificationTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
let EnumEnum_IdentificationTypeFieldUpdateOperationsInput = class EnumEnum_IdentificationTypeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_IdentificationTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_IdentificationTypeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_IdentificationTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_IdentificationTypeFieldUpdateOperationsInput);
exports.EnumEnum_IdentificationTypeFieldUpdateOperationsInput = EnumEnum_IdentificationTypeFieldUpdateOperationsInput;
