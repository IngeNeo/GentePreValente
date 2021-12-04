"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMultimediaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateMultimediaArgs_1 = require("./args/UpdateMultimediaArgs");
const Multimedia_1 = require("../../../models/Multimedia");
const helpers_1 = require("../../../helpers");
let UpdateMultimediaResolver = class UpdateMultimediaResolver {
    async updateMultimedia(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).multimedia.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateMultimediaResolver.prototype, "updateMultimedia", null);
UpdateMultimediaResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Multimedia_1.Multimedia)
], UpdateMultimediaResolver);
exports.UpdateMultimediaResolver = UpdateMultimediaResolver;
