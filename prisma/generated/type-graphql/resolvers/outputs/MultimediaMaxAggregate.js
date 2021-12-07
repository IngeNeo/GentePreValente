"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MultimediaMaxAggregate = class MultimediaMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxAggregate.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxAggregate.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMaxAggregate.prototype, "companyId", void 0);
MultimediaMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MultimediaMaxAggregate", {
        isAbstract: true
    })
], MultimediaMaxAggregate);
exports.MultimediaMaxAggregate = MultimediaMaxAggregate;
