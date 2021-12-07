import { EnumEnum_IdentificationTypeWithAggregatesFilter } from "../inputs/EnumEnum_IdentificationTypeWithAggregatesFilter";
import { EnumEnum_StateWithAggregatesFilter } from "../inputs/EnumEnum_StateWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CompanyScalarWhereWithAggregatesInput {
    AND?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    OR?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    businessName?: StringWithAggregatesFilter | undefined;
    identificationType?: EnumEnum_IdentificationTypeWithAggregatesFilter | undefined;
    identification?: StringWithAggregatesFilter | undefined;
    nEmployees?: IntWithAggregatesFilter | undefined;
    logo?: StringNullableWithAggregatesFilter | undefined;
    state?: EnumEnum_StateWithAggregatesFilter | undefined;
}
