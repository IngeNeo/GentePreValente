import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMultimediaArgs } from "./args/DeleteManyMultimediaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMultimediaResolver {
    deleteManyMultimedia(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMultimediaArgs): Promise<AffectedRowsOutput>;
}
