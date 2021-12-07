"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MultimediaCreateManyInput = class MultimediaCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateManyInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateManyInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateManyInput.prototype, "companyId", void 0);
MultimediaCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCreateManyInput", {
        isAbstract: true
    })
], MultimediaCreateManyInput);
exports.MultimediaCreateManyInput = MultimediaCreateManyInput;
