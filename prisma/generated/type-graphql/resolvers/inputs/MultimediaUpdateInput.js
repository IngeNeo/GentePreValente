"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyUpdateOneRequiredWithoutMultimediaInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutMultimediaInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MultimediaUpdateInput = class MultimediaUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MultimediaUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MultimediaUpdateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MultimediaUpdateInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutMultimediaInput_1.CompanyUpdateOneRequiredWithoutMultimediaInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateOneRequiredWithoutMultimediaInput_1.CompanyUpdateOneRequiredWithoutMultimediaInput)
], MultimediaUpdateInput.prototype, "company", void 0);
MultimediaUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaUpdateInput", {
        isAbstract: true
    })
], MultimediaUpdateInput);
exports.MultimediaUpdateInput = MultimediaUpdateInput;
