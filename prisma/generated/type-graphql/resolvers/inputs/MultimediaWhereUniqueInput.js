"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MultimediaWhereUniqueInput = class MultimediaWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaWhereUniqueInput.prototype, "id", void 0);
MultimediaWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaWhereUniqueInput", {
        isAbstract: true
    })
], MultimediaWhereUniqueInput);
exports.MultimediaWhereUniqueInput = MultimediaWhereUniqueInput;
