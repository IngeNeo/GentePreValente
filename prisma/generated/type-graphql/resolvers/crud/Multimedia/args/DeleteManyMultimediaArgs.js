"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaWhereInput_1 = require("../../../inputs/MultimediaWhereInput");
let DeleteManyMultimediaArgs = class DeleteManyMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereInput_1.MultimediaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereInput_1.MultimediaWhereInput)
], DeleteManyMultimediaArgs.prototype, "where", void 0);
DeleteManyMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyMultimediaArgs);
exports.DeleteManyMultimediaArgs = DeleteManyMultimediaArgs;
