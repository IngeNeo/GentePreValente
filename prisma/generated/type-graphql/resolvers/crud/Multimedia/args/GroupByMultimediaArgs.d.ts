import { MultimediaOrderByWithAggregationInput } from "../../../inputs/MultimediaOrderByWithAggregationInput";
import { MultimediaScalarWhereWithAggregatesInput } from "../../../inputs/MultimediaScalarWhereWithAggregatesInput";
import { MultimediaWhereInput } from "../../../inputs/MultimediaWhereInput";
export declare class GroupByMultimediaArgs {
    where?: MultimediaWhereInput | undefined;
    orderBy?: MultimediaOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "description" | "url" | "companyId">;
    having?: MultimediaScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
