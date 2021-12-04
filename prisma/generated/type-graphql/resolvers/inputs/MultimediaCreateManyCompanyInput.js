"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCreateManyCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MultimediaCreateManyCompanyInput = class MultimediaCreateManyCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateManyCompanyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateManyCompanyInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateManyCompanyInput.prototype, "url", void 0);
MultimediaCreateManyCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCreateManyCompanyInput", {
        isAbstract: true
    })
], MultimediaCreateManyCompanyInput);
exports.MultimediaCreateManyCompanyInput = MultimediaCreateManyCompanyInput;
