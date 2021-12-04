"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateOneRequiredWithoutMultimediaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateOrConnectWithoutMultimediaInput_1 = require("../inputs/CompanyCreateOrConnectWithoutMultimediaInput");
const CompanyCreateWithoutMultimediaInput_1 = require("../inputs/CompanyCreateWithoutMultimediaInput");
const CompanyUpdateWithoutMultimediaInput_1 = require("../inputs/CompanyUpdateWithoutMultimediaInput");
const CompanyUpsertWithoutMultimediaInput_1 = require("../inputs/CompanyUpsertWithoutMultimediaInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyUpdateOneRequiredWithoutMultimediaInput = class CompanyUpdateOneRequiredWithoutMultimediaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateWithoutMultimediaInput_1.CompanyCreateWithoutMultimediaInput)
], CompanyUpdateOneRequiredWithoutMultimediaInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutMultimediaInput_1.CompanyCreateOrConnectWithoutMultimediaInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateOrConnectWithoutMultimediaInput_1.CompanyCreateOrConnectWithoutMultimediaInput)
], CompanyUpdateOneRequiredWithoutMultimediaInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpsertWithoutMultimediaInput_1.CompanyUpsertWithoutMultimediaInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpsertWithoutMultimediaInput_1.CompanyUpsertWithoutMultimediaInput)
], CompanyUpdateOneRequiredWithoutMultimediaInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyUpdateOneRequiredWithoutMultimediaInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutMultimediaInput_1.CompanyUpdateWithoutMultimediaInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateWithoutMultimediaInput_1.CompanyUpdateWithoutMultimediaInput)
], CompanyUpdateOneRequiredWithoutMultimediaInput.prototype, "update", void 0);
CompanyUpdateOneRequiredWithoutMultimediaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyUpdateOneRequiredWithoutMultimediaInput", {
        isAbstract: true
    })
], CompanyUpdateOneRequiredWithoutMultimediaInput);
exports.CompanyUpdateOneRequiredWithoutMultimediaInput = CompanyUpdateOneRequiredWithoutMultimediaInput;
