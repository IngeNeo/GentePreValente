"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaUpsertWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateWithoutCompanyInput_1 = require("../inputs/MultimediaCreateWithoutCompanyInput");
const MultimediaUpdateWithoutCompanyInput_1 = require("../inputs/MultimediaUpdateWithoutCompanyInput");
const MultimediaWhereUniqueInput_1 = require("../inputs/MultimediaWhereUniqueInput");
let MultimediaUpsertWithWhereUniqueWithoutCompanyInput = class MultimediaUpsertWithWhereUniqueWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput)
], MultimediaUpsertWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaUpdateWithoutCompanyInput_1.MultimediaUpdateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaUpdateWithoutCompanyInput_1.MultimediaUpdateWithoutCompanyInput)
], MultimediaUpsertWithWhereUniqueWithoutCompanyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCreateWithoutCompanyInput_1.MultimediaCreateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCreateWithoutCompanyInput_1.MultimediaCreateWithoutCompanyInput)
], MultimediaUpsertWithWhereUniqueWithoutCompanyInput.prototype, "create", void 0);
MultimediaUpsertWithWhereUniqueWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaUpsertWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaUpsertWithWhereUniqueWithoutCompanyInput);
exports.MultimediaUpsertWithWhereUniqueWithoutCompanyInput = MultimediaUpsertWithWhereUniqueWithoutCompanyInput;
