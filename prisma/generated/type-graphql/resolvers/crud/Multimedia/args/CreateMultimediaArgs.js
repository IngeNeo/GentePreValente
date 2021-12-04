"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateInput_1 = require("../../../inputs/MultimediaCreateInput");
let CreateMultimediaArgs = class CreateMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCreateInput_1.MultimediaCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCreateInput_1.MultimediaCreateInput)
], CreateMultimediaArgs.prototype, "data", void 0);
CreateMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateMultimediaArgs);
exports.CreateMultimediaArgs = CreateMultimediaArgs;
