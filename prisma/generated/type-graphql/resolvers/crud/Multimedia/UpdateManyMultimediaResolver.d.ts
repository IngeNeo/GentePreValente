import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMultimediaArgs } from "./args/UpdateManyMultimediaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMultimediaResolver {
    updateManyMultimedia(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMultimediaArgs): Promise<AffectedRowsOutput>;
}
