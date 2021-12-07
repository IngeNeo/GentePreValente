"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateNestedManyWithoutCompanyInput_1 = require("../inputs/MultimediaCreateNestedManyWithoutCompanyInput");
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
const Enum_State_1 = require("../../enums/Enum_State");
let CompanyCreateInput = class CompanyCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyCreateInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCreateNestedManyWithoutCompanyInput_1.MultimediaCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCreateNestedManyWithoutCompanyInput_1.MultimediaCreateNestedManyWithoutCompanyInput)
], CompanyCreateInput.prototype, "multimedia", void 0);
CompanyCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateInput", {
        isAbstract: true
    })
], CompanyCreateInput);
exports.CompanyCreateInput = CompanyCreateInput;
