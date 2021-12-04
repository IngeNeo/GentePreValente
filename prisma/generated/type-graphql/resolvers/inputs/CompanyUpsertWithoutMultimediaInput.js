"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpsertWithoutMultimediaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateWithoutMultimediaInput_1 = require("../inputs/CompanyCreateWithoutMultimediaInput");
const CompanyUpdateWithoutMultimediaInput_1 = require("../inputs/CompanyUpdateWithoutMultimediaInput");
let CompanyUpsertWithoutMultimediaInput = class CompanyUpsertWithoutMultimediaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutMultimediaInput_1.CompanyUpdateWithoutMultimediaInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateWithoutMultimediaInput_1.CompanyUpdateWithoutMultimediaInput)
], CompanyUpsertWithoutMultimediaInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput)
], CompanyUpsertWithoutMultimediaInput.prototype, "create", void 0);
CompanyUpsertWithoutMultimediaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpsertWithoutMultimediaInput", {
        isAbstract: true
    })
], CompanyUpsertWithoutMultimediaInput);
exports.CompanyUpsertWithoutMultimediaInput = CompanyUpsertWithoutMultimediaInput;
