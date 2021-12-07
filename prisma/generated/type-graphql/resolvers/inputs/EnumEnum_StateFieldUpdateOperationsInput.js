"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_StateFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_State_1 = require("../../enums/Enum_State");
let EnumEnum_StateFieldUpdateOperationsInput = class EnumEnum_StateFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_StateFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_StateFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_StateFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_StateFieldUpdateOperationsInput);
exports.EnumEnum_StateFieldUpdateOperationsInput = EnumEnum_StateFieldUpdateOperationsInput;
