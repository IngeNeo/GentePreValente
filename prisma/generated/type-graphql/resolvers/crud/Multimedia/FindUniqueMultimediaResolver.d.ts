import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMultimediaArgs } from "./args/FindUniqueMultimediaArgs";
import { Multimedia } from "../../../models/Multimedia";
export declare class FindUniqueMultimediaResolver {
    multimedia(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMultimediaArgs): Promise<Multimedia | null>;
}
