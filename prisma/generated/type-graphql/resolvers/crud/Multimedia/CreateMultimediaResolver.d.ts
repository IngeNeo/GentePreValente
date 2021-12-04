import { GraphQLResolveInfo } from "graphql";
import { CreateMultimediaArgs } from "./args/CreateMultimediaArgs";
import { Multimedia } from "../../../models/Multimedia";
export declare class CreateMultimediaResolver {
    createMultimedia(ctx: any, info: GraphQLResolveInfo, args: CreateMultimediaArgs): Promise<Multimedia>;
}
