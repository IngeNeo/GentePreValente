import { GraphQLResolveInfo } from "graphql";
import { FindManyMultimediaArgs } from "./args/FindManyMultimediaArgs";
import { Multimedia } from "../../../models/Multimedia";
export declare class FindManyMultimediaResolver {
    multimedias(ctx: any, info: GraphQLResolveInfo, args: FindManyMultimediaArgs): Promise<Multimedia[]>;
}
