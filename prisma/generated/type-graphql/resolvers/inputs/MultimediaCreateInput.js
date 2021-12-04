"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateNestedOneWithoutMultimediaInput_1 = require("../inputs/CompanyCreateNestedOneWithoutMultimediaInput");
let MultimediaCreateInput = class MultimediaCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaCreateInput.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutMultimediaInput_1.CompanyCreateNestedOneWithoutMultimediaInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateNestedOneWithoutMultimediaInput_1.CompanyCreateNestedOneWithoutMultimediaInput)
], MultimediaCreateInput.prototype, "company", void 0);
MultimediaCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCreateInput", {
        isAbstract: true
    })
], MultimediaCreateInput);
exports.MultimediaCreateInput = MultimediaCreateInput;
