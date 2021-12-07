import { CompanyAvgOrderByAggregateInput } from "../inputs/CompanyAvgOrderByAggregateInput";
import { CompanyCountOrderByAggregateInput } from "../inputs/CompanyCountOrderByAggregateInput";
import { CompanyMaxOrderByAggregateInput } from "../inputs/CompanyMaxOrderByAggregateInput";
import { CompanyMinOrderByAggregateInput } from "../inputs/CompanyMinOrderByAggregateInput";
import { CompanySumOrderByAggregateInput } from "../inputs/CompanySumOrderByAggregateInput";
export declare class CompanyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    businessName?: "asc" | "desc" | undefined;
    identificationType?: "asc" | "desc" | undefined;
    identification?: "asc" | "desc" | undefined;
    nEmployees?: "asc" | "desc" | undefined;
    logo?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    _count?: CompanyCountOrderByAggregateInput | undefined;
    _avg?: CompanyAvgOrderByAggregateInput | undefined;
    _max?: CompanyMaxOrderByAggregateInput | undefined;
    _min?: CompanyMinOrderByAggregateInput | undefined;
    _sum?: CompanySumOrderByAggregateInput | undefined;
}
