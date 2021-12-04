import { GraphQLResolveInfo } from "graphql";
import { GroupByMultimediaArgs } from "./args/GroupByMultimediaArgs";
import { MultimediaGroupBy } from "../../outputs/MultimediaGroupBy";
export declare class GroupByMultimediaResolver {
    groupByMultimedia(ctx: any, info: GraphQLResolveInfo, args: GroupByMultimediaArgs): Promise<MultimediaGroupBy[]>;
}
