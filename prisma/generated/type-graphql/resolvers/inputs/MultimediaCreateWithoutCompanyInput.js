"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCreateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MultimediaCreateWithoutCompanyInput = class MultimediaCreateWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateWithoutCompanyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateWithoutCompanyInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateWithoutCompanyInput.prototype, "url", void 0);
MultimediaCreateWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCreateWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaCreateWithoutCompanyInput);
exports.MultimediaCreateWithoutCompanyInput = MultimediaCreateWithoutCompanyInput;
