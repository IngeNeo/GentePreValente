"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCreateOrConnectWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateWithoutCompanyInput_1 = require("../inputs/MultimediaCreateWithoutCompanyInput");
const MultimediaWhereUniqueInput_1 = require("../inputs/MultimediaWhereUniqueInput");
let MultimediaCreateOrConnectWithoutCompanyInput = class MultimediaCreateOrConnectWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput)
], MultimediaCreateOrConnectWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCreateWithoutCompanyInput_1.MultimediaCreateWithoutCompanyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCreateWithoutCompanyInput_1.MultimediaCreateWithoutCompanyInput)
], MultimediaCreateOrConnectWithoutCompanyInput.prototype, "create", void 0);
MultimediaCreateOrConnectWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCreateOrConnectWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaCreateOrConnectWithoutCompanyInput);
exports.MultimediaCreateOrConnectWithoutCompanyInput = MultimediaCreateOrConnectWithoutCompanyInput;
