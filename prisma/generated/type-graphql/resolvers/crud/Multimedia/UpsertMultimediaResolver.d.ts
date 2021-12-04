import { GraphQLResolveInfo } from "graphql";
import { UpsertMultimediaArgs } from "./args/UpsertMultimediaArgs";
import { Multimedia } from "../../../models/Multimedia";
export declare class UpsertMultimediaResolver {
    upsertMultimedia(ctx: any, info: GraphQLResolveInfo, args: UpsertMultimediaArgs): Promise<Multimedia>;
}
