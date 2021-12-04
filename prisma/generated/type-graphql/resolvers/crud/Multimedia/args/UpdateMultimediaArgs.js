"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaUpdateInput_1 = require("../../../inputs/MultimediaUpdateInput");
const MultimediaWhereUniqueInput_1 = require("../../../inputs/MultimediaWhereUniqueInput");
let UpdateMultimediaArgs = class UpdateMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaUpdateInput_1.MultimediaUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaUpdateInput_1.MultimediaUpdateInput)
], UpdateMultimediaArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput)
], UpdateMultimediaArgs.prototype, "where", void 0);
UpdateMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateMultimediaArgs);
exports.UpdateMultimediaArgs = UpdateMultimediaArgs;
