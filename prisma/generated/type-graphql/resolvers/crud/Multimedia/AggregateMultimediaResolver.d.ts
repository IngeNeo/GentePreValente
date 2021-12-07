import { GraphQLResolveInfo } from "graphql";
import { AggregateMultimediaArgs } from "./args/AggregateMultimediaArgs";
import { AggregateMultimedia } from "../../outputs/AggregateMultimedia";
export declare class AggregateMultimediaResolver {
    aggregateMultimedia(ctx: any, info: GraphQLResolveInfo, args: AggregateMultimediaArgs): Promise<AggregateMultimedia>;
}
