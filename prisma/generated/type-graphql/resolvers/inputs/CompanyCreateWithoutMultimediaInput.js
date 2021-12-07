"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateWithoutMultimediaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_IdentificationType_1 = require("../../enums/Enum_IdentificationType");
const Enum_State_1 = require("../../enums/Enum_State");
let CompanyCreateWithoutMultimediaInput = class CompanyCreateWithoutMultimediaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutMultimediaInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutMultimediaInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutMultimediaInput.prototype, "businessName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_IdentificationType_1.Enum_IdentificationType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutMultimediaInput.prototype, "identificationType", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutMultimediaInput.prototype, "identification", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyCreateWithoutMultimediaInput.prototype, "nEmployees", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutMultimediaInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_State_1.Enum_State, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CompanyCreateWithoutMultimediaInput.prototype, "state", void 0);
CompanyCreateWithoutMultimediaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyCreateWithoutMultimediaInput", {
        isAbstract: true
    })
], CompanyCreateWithoutMultimediaInput);
exports.CompanyCreateWithoutMultimediaInput = CompanyCreateWithoutMultimediaInput;
