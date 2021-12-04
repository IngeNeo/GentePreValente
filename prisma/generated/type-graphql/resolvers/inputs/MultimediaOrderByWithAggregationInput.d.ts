import { MultimediaCountOrderByAggregateInput } from "../inputs/MultimediaCountOrderByAggregateInput";
import { MultimediaMaxOrderByAggregateInput } from "../inputs/MultimediaMaxOrderByAggregateInput";
import { MultimediaMinOrderByAggregateInput } from "../inputs/MultimediaMinOrderByAggregateInput";
export declare class MultimediaOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    _count?: MultimediaCountOrderByAggregateInput | undefined;
    _max?: MultimediaMaxOrderByAggregateInput | undefined;
    _min?: MultimediaMinOrderByAggregateInput | undefined;
}
