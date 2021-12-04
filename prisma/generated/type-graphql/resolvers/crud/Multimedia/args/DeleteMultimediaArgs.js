"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaWhereUniqueInput_1 = require("../../../inputs/MultimediaWhereUniqueInput");
let DeleteMultimediaArgs = class DeleteMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput)
], DeleteMultimediaArgs.prototype, "where", void 0);
DeleteMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteMultimediaArgs);
exports.DeleteMultimediaArgs = DeleteMultimediaArgs;
