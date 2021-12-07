"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaUpdateManyMutationInput_1 = require("../../../inputs/MultimediaUpdateManyMutationInput");
const MultimediaWhereInput_1 = require("../../../inputs/MultimediaWhereInput");
let UpdateManyMultimediaArgs = class UpdateManyMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaUpdateManyMutationInput_1.MultimediaUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaUpdateManyMutationInput_1.MultimediaUpdateManyMutationInput)
], UpdateManyMultimediaArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereInput_1.MultimediaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereInput_1.MultimediaWhereInput)
], UpdateManyMultimediaArgs.prototype, "where", void 0);
UpdateManyMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyMultimediaArgs);
exports.UpdateManyMultimediaArgs = UpdateManyMultimediaArgs;
