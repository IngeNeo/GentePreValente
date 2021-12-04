"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const Multimedia_1 = require("../../../models/Multimedia");
const CompanyMultimediaArgs_1 = require("./args/CompanyMultimediaArgs");
const helpers_1 = require("../../../helpers");
let CompanyRelationsResolver = class CompanyRelationsResolver {
    async multimedia(company, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
            where: {
                id: company.id,
            },
        }).multimedia(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Multimedia_1.Multimedia], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Company_1.Company, Object, CompanyMultimediaArgs_1.CompanyMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyRelationsResolver.prototype, "multimedia", null);
CompanyRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], CompanyRelationsResolver);
exports.CompanyRelationsResolver = CompanyRelationsResolver;
