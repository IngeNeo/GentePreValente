"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMultimediaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateMultimediaArgs_1 = require("./args/AggregateMultimediaArgs");
const Multimedia_1 = require("../../../models/Multimedia");
const AggregateMultimedia_1 = require("../../outputs/AggregateMultimedia");
const helpers_1 = require("../../../helpers");
let AggregateMultimediaResolver = class AggregateMultimediaResolver {
    async aggregateMultimedia(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateMultimedia_1.AggregateMultimedia, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateMultimediaArgs_1.AggregateMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateMultimediaResolver.prototype, "aggregateMultimedia", null);
AggregateMultimediaResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Multimedia_1.Multimedia)
], AggregateMultimediaResolver);
exports.AggregateMultimediaResolver = AggregateMultimediaResolver;
