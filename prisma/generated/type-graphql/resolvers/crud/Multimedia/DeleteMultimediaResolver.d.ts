import { GraphQLResolveInfo } from "graphql";
import { DeleteMultimediaArgs } from "./args/DeleteMultimediaArgs";
import { Multimedia } from "../../../models/Multimedia";
export declare class DeleteMultimediaResolver {
    deleteMultimedia(ctx: any, info: GraphQLResolveInfo, args: DeleteMultimediaArgs): Promise<Multimedia | null>;
}
