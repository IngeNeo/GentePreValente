"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCountAggregate_1 = require("../outputs/MultimediaCountAggregate");
const MultimediaMaxAggregate_1 = require("../outputs/MultimediaMaxAggregate");
const MultimediaMinAggregate_1 = require("../outputs/MultimediaMinAggregate");
let MultimediaGroupBy = class MultimediaGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaGroupBy.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaGroupBy.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaGroupBy.prototype, "companyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCountAggregate_1.MultimediaCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCountAggregate_1.MultimediaCountAggregate)
], MultimediaGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaMinAggregate_1.MultimediaMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaMinAggregate_1.MultimediaMinAggregate)
], MultimediaGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaMaxAggregate_1.MultimediaMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaMaxAggregate_1.MultimediaMaxAggregate)
], MultimediaGroupBy.prototype, "_max", void 0);
MultimediaGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MultimediaGroupBy", {
        isAbstract: true
    })
], MultimediaGroupBy);
exports.MultimediaGroupBy = MultimediaGroupBy;
