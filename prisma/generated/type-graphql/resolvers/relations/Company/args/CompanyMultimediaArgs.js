"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMultimediaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaOrderByWithRelationInput_1 = require("../../../inputs/MultimediaOrderByWithRelationInput");
const MultimediaWhereInput_1 = require("../../../inputs/MultimediaWhereInput");
const MultimediaWhereUniqueInput_1 = require("../../../inputs/MultimediaWhereUniqueInput");
const MultimediaScalarFieldEnum_1 = require("../../../../enums/MultimediaScalarFieldEnum");
let CompanyMultimediaArgs = class CompanyMultimediaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereInput_1.MultimediaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereInput_1.MultimediaWhereInput)
], CompanyMultimediaArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaOrderByWithRelationInput_1.MultimediaOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyMultimediaArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaWhereUniqueInput_1.MultimediaWhereUniqueInput)
], CompanyMultimediaArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyMultimediaArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CompanyMultimediaArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaScalarFieldEnum_1.MultimediaScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CompanyMultimediaArgs.prototype, "distinct", void 0);
CompanyMultimediaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CompanyMultimediaArgs);
exports.CompanyMultimediaArgs = CompanyMultimediaArgs;
