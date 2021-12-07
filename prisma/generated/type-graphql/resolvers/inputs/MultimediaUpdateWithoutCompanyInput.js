"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaUpdateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MultimediaUpdateWithoutCompanyInput = class MultimediaUpdateWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MultimediaUpdateWithoutCompanyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MultimediaUpdateWithoutCompanyInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MultimediaUpdateWithoutCompanyInput.prototype, "url", void 0);
MultimediaUpdateWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaUpdateWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaUpdateWithoutCompanyInput);
exports.MultimediaUpdateWithoutCompanyInput = MultimediaUpdateWithoutCompanyInput;
