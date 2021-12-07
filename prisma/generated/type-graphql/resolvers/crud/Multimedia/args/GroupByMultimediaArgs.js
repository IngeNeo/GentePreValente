"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaOrderByWithAggregationInput_1 = require("../../../inputs/MultimediaOrderByWithAggregationInput");
const MultimediaScalarWhereWithAggregatesInput_1 = require("../../../inputs/MultimediaScalarWhereWithAggregatesInput");
const MultimediaWhereInput_1 = require("../../../inputs/MultimediaWhereInput");
const MultimediaScalarFieldEnum_1 = require("../../../../enums/MultimediaScalarFieldEnum");
let GroupByMultimediaArgs = class GroupByMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereInput_1.MultimediaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereInput_1.MultimediaWhereInput)
], GroupByMultimediaArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaOrderByWithAggregationInput_1.MultimediaOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByMultimediaArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaScalarFieldEnum_1.MultimediaScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByMultimediaArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaScalarWhereWithAggregatesInput_1.MultimediaScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaScalarWhereWithAggregatesInput_1.MultimediaScalarWhereWithAggregatesInput)
], GroupByMultimediaArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByMultimediaArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByMultimediaArgs.prototype, "skip", void 0);
GroupByMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByMultimediaArgs);
exports.GroupByMultimediaArgs = GroupByMultimediaArgs;
