import { GraphQLResolveInfo } from "graphql";
import { FindFirstMultimediaArgs } from "./args/FindFirstMultimediaArgs";
import { Multimedia } from "../../../models/Multimedia";
export declare class FindFirstMultimediaResolver {
    findFirstMultimedia(ctx: any, info: GraphQLResolveInfo, args: FindFirstMultimediaArgs): Promise<Multimedia | null>;
}
