"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateManyInput_1 = require("../../../inputs/MultimediaCreateManyInput");
let CreateManyMultimediaArgs = class CreateManyMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaCreateManyInput_1.MultimediaCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyMultimediaArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyMultimediaArgs.prototype, "skipDuplicates", void 0);
CreateManyMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyMultimediaArgs);
exports.CreateManyMultimediaArgs = CreateManyMultimediaArgs;
