"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateMultimediaArgs_1 = require("./args/AggregateMultimediaArgs");
const CreateManyMultimediaArgs_1 = require("./args/CreateManyMultimediaArgs");
const CreateMultimediaArgs_1 = require("./args/CreateMultimediaArgs");
const DeleteManyMultimediaArgs_1 = require("./args/DeleteManyMultimediaArgs");
const DeleteMultimediaArgs_1 = require("./args/DeleteMultimediaArgs");
const FindFirstMultimediaArgs_1 = require("./args/FindFirstMultimediaArgs");
const FindManyMultimediaArgs_1 = require("./args/FindManyMultimediaArgs");
const FindUniqueMultimediaArgs_1 = require("./args/FindUniqueMultimediaArgs");
const GroupByMultimediaArgs_1 = require("./args/GroupByMultimediaArgs");
const UpdateManyMultimediaArgs_1 = require("./args/UpdateManyMultimediaArgs");
const UpdateMultimediaArgs_1 = require("./args/UpdateMultimediaArgs");
const UpsertMultimediaArgs_1 = require("./args/UpsertMultimediaArgs");
const helpers_1 = require("../../../helpers");
const Multimedia_1 = require("../../../models/Multimedia");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMultimedia_1 = require("../../outputs/AggregateMultimedia");
const MultimediaGroupBy_1 = require("../../outputs/MultimediaGroupBy");
let MultimediaCrudResolver = class MultimediaCrudResolver {
    async multimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async multimedias(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMultimedia(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMultimedia(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Multimedia_1.Multimedia, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueMultimediaArgs_1.FindUniqueMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "multimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Multimedia_1.Multimedia, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstMultimediaArgs_1.FindFirstMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "findFirstMultimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Multimedia_1.Multimedia], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyMultimediaArgs_1.FindManyMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "multimedias", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Multimedia_1.Multimedia, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateMultimediaArgs_1.CreateMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "createMultimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyMultimediaArgs_1.CreateManyMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "createManyMultimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Multimedia_1.Multimedia, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteMultimediaArgs_1.DeleteMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "deleteMultimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Multimedia_1.Multimedia, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateMultimediaArgs_1.UpdateMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "updateMultimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyMultimediaArgs_1.DeleteManyMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "deleteManyMultimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyMultimediaArgs_1.UpdateManyMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "updateManyMultimedia", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Multimedia_1.Multimedia, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertMultimediaArgs_1.UpsertMultimediaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MultimediaCrudResolver.prototype, "upsertMultimedia", null);
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
], MultimediaCrudResolver.prototype, "aggregateMultimedia", null);
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
], MultimediaCrudResolver.prototype, "groupByMultimedia", null);
MultimediaCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Multimedia_1.Multimedia)
], MultimediaCrudResolver);
exports.MultimediaCrudResolver = MultimediaCrudResolver;
