"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaUpdateManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateManyCompanyInputEnvelope_1 = require("../inputs/MultimediaCreateManyCompanyInputEnvelope");
const MultimediaCreateOrConnectWithoutCompanyInput_1 = require("../inputs/MultimediaCreateOrConnectWithoutCompanyInput");
const MultimediaCreateWithoutCompanyInput_1 = require("../inputs/MultimediaCreateWithoutCompanyInput");
const MultimediaScalarWhereInput_1 = require("../inputs/MultimediaScalarWhereInput");
const MultimediaUpdateManyWithWhereWithoutCompanyInput_1 = require("../inputs/MultimediaUpdateManyWithWhereWithoutCompanyInput");
const MultimediaUpdateWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/MultimediaUpdateWithWhereUniqueWithoutCompanyInput");
const MultimediaUpsertWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/MultimediaUpsertWithWhereUniqueWithoutCompanyInput");
const MultimediaWhereUniqueInput_1 = require("../inputs/MultimediaWhereUniqueInput");
let MultimediaUpdateManyWithoutCompanyInput = class MultimediaUpdateManyWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaCreateWithoutCompanyInput_1.MultimediaCreateWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaCreateOrConnectWithoutCompanyInput_1.MultimediaCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaUpsertWithWhereUniqueWithoutCompanyInput_1.MultimediaUpsertWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCreateManyCompanyInputEnvelope_1.MultimediaCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCreateManyCompanyInputEnvelope_1.MultimediaCreateManyCompanyInputEnvelope)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaUpdateWithWhereUniqueWithoutCompanyInput_1.MultimediaUpdateWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaUpdateManyWithWhereWithoutCompanyInput_1.MultimediaUpdateManyWithWhereWithoutCompanyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaScalarWhereInput_1.MultimediaScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaUpdateManyWithoutCompanyInput.prototype, "deleteMany", void 0);
MultimediaUpdateManyWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaUpdateManyWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaUpdateManyWithoutCompanyInput);
exports.MultimediaUpdateManyWithoutCompanyInput = MultimediaUpdateManyWithoutCompanyInput;
