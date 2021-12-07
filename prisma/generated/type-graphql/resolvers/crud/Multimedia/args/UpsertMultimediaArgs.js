"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateInput_1 = require("../../../inputs/MultimediaCreateInput");
const MultimediaUpdateInput_1 = require("../../../inputs/MultimediaUpdateInput");
const MultimediaWhereUniqueInput_1 = require("../../../inputs/MultimediaWhereUniqueInput");
let UpsertMultimediaArgs = class UpsertMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput)
], UpsertMultimediaArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCreateInput_1.MultimediaCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCreateInput_1.MultimediaCreateInput)
], UpsertMultimediaArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaUpdateInput_1.MultimediaUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaUpdateInput_1.MultimediaUpdateInput)
], UpsertMultimediaArgs.prototype, "update", void 0);
UpsertMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertMultimediaArgs);
exports.UpsertMultimediaArgs = UpsertMultimediaArgs;
