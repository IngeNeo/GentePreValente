"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMultimedia = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCountAggregate_1 = require("../outputs/MultimediaCountAggregate");
const MultimediaMaxAggregate_1 = require("../outputs/MultimediaMaxAggregate");
const MultimediaMinAggregate_1 = require("../outputs/MultimediaMinAggregate");
let AggregateMultimedia = class AggregateMultimedia {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaCountAggregate_1.MultimediaCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaCountAggregate_1.MultimediaCountAggregate)
], AggregateMultimedia.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaMinAggregate_1.MultimediaMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaMinAggregate_1.MultimediaMinAggregate)
], AggregateMultimedia.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaMaxAggregate_1.MultimediaMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaMaxAggregate_1.MultimediaMaxAggregate)
], AggregateMultimedia.prototype, "_max", void 0);
AggregateMultimedia = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateMultimedia", {
        isAbstract: true
    })
], AggregateMultimedia);
exports.AggregateMultimedia = AggregateMultimedia;
