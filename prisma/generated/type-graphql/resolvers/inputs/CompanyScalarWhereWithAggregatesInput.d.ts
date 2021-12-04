import { EnumEnum_StateWithAggregatesFilter } from "../inputs/EnumEnum_StateWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CompanyScalarWhereWithAggregatesInput {
    AND?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    OR?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    businessName?: StringWithAggregatesFilter | undefined;
    nit?: StringWithAggregatesFilter | undefined;
    identification?: StringWithAggregatesFilter | undefined;
    nEmployees?: IntWithAggregatesFilter | undefined;
    logo?: StringWithAggregatesFilter | undefined;
    state?: EnumEnum_StateWithAggregatesFilter | undefined;
}
