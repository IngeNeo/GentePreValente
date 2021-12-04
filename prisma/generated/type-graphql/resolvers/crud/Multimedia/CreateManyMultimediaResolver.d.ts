import { GraphQLResolveInfo } from "graphql";
import { CreateManyMultimediaArgs } from "./args/CreateManyMultimediaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMultimediaResolver {
    createManyMultimedia(ctx: any, info: GraphQLResolveInfo, args: CreateManyMultimediaArgs): Promise<AffectedRowsOutput>;
}
