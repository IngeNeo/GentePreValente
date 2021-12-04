"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaWhereInput_1 = require("../inputs/MultimediaWhereInput");
let MultimediaListRelationFilter = class MultimediaListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereInput_1.MultimediaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereInput_1.MultimediaWhereInput)
], MultimediaListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereInput_1.MultimediaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereInput_1.MultimediaWhereInput)
], MultimediaListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereInput_1.MultimediaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereInput_1.MultimediaWhereInput)
], MultimediaListRelationFilter.prototype, "none", void 0);
MultimediaListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaListRelationFilter", {
        isAbstract: true
    })
], MultimediaListRelationFilter);
exports.MultimediaListRelationFilter = MultimediaListRelationFilter;
