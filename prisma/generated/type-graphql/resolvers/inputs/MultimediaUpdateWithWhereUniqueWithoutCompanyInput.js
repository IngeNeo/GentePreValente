"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaUpdateWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaUpdateWithoutCompanyInput_1 = require("../inputs/MultimediaUpdateWithoutCompanyInput");
const MultimediaWhereUniqueInput_1 = require("../inputs/MultimediaWhereUniqueInput");
let MultimediaUpdateWithWhereUniqueWithoutCompanyInput = class MultimediaUpdateWithWhereUniqueWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput)
], MultimediaUpdateWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaUpdateWithoutCompanyInput_1.MultimediaUpdateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaUpdateWithoutCompanyInput_1.MultimediaUpdateWithoutCompanyInput)
], MultimediaUpdateWithWhereUniqueWithoutCompanyInput.prototype, "data", void 0);
MultimediaUpdateWithWhereUniqueWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaUpdateWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaUpdateWithWhereUniqueWithoutCompanyInput);
exports.MultimediaUpdateWithWhereUniqueWithoutCompanyInput = MultimediaUpdateWithWhereUniqueWithoutCompanyInput;
