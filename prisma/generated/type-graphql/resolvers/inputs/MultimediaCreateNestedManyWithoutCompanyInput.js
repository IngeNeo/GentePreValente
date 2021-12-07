"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCreateNestedManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateManyCompanyInputEnvelope_1 = require("../inputs/MultimediaCreateManyCompanyInputEnvelope");
const MultimediaCreateOrConnectWithoutCompanyInput_1 = require("../inputs/MultimediaCreateOrConnectWithoutCompanyInput");
const MultimediaCreateWithoutCompanyInput_1 = require("../inputs/MultimediaCreateWithoutCompanyInput");
const MultimediaWhereUniqueInput_1 = require("../inputs/MultimediaWhereUniqueInput");
let MultimediaCreateNestedManyWithoutCompanyInput = class MultimediaCreateNestedManyWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaCreateWithoutCompanyInput_1.MultimediaCreateWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaCreateNestedManyWithoutCompanyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaCreateOrConnectWithoutCompanyInput_1.MultimediaCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaCreateNestedManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCreateManyCompanyInputEnvelope_1.MultimediaCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCreateManyCompanyInputEnvelope_1.MultimediaCreateManyCompanyInputEnvelope)
], MultimediaCreateNestedManyWithoutCompanyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaCreateNestedManyWithoutCompanyInput.prototype, "connect", void 0);
MultimediaCreateNestedManyWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCreateNestedManyWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaCreateNestedManyWithoutCompanyInput);
exports.MultimediaCreateNestedManyWithoutCompanyInput = MultimediaCreateNestedManyWithoutCompanyInput;
