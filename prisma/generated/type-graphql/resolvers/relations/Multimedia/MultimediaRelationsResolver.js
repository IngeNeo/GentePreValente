"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const Multimedia_1 = require("../../../models/Multimedia");
const helpers_1 = require("../../../helpers");
let MultimediaRelationsResolver = class MultimediaRelationsResolver {
    async company(multimedia, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.findUnique({
            where: {
                id: multimedia.id,
            },
        }).company({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Company_1.Company, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Multimedia_1.Multimedia, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaRelationsResolver.prototype, "company", null);
MultimediaRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Multimedia_1.Multimedia)
], MultimediaRelationsResolver);
exports.MultimediaRelationsResolver = MultimediaRelationsResolver;
