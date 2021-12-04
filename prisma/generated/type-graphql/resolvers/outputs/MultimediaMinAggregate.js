"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MultimediaMinAggregate = class MultimediaMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinAggregate.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinAggregate.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MultimediaMinAggregate.prototype, "companyId", void 0);
MultimediaMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MultimediaMinAggregate", {
        isAbstract: true
    })
], MultimediaMinAggregate);
exports.MultimediaMinAggregate = MultimediaMinAggregate;
