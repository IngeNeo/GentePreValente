"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMultimediaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByMultimediaArgs_1 = require("./args/GroupByMultimediaArgs");
const Multimedia_1 = require("../../../models/Multimedia");
const MultimediaGroupBy_1 = require("../../outputs/MultimediaGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMultimediaResolver = class GroupByMultimediaResolver {
    async groupByMultimedia(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [MultimediaGroupBy_1.MultimediaGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByMultimediaArgs_1.GroupByMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByMultimediaResolver.prototype, "groupByMultimedia", null);
GroupByMultimediaResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Multimedia_1.Multimedia)
], GroupByMultimediaResolver);
exports.GroupByMultimediaResolver = GroupByMultimediaResolver;
