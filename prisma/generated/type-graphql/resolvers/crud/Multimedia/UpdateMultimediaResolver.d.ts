import { GraphQLResolveInfo } from "graphql";
import { UpdateMultimediaArgs } from "./args/UpdateMultimediaArgs";
import { Multimedia } from "../../../models/Multimedia";
export declare class UpdateMultimediaResolver {
    updateMultimedia(ctx: any, info: GraphQLResolveInfo, args: UpdateMultimediaArgs): Promise<Multimedia | null>;
}
