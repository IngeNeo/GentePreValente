import { NestedEnumEnum_IdentificationTypeFilter } from "../inputs/NestedEnumEnum_IdentificationTypeFilter";
import { NestedEnumEnum_IdentificationTypeWithAggregatesFilter } from "../inputs/NestedEnumEnum_IdentificationTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_IdentificationTypeWithAggregatesFilter {
    equals?: "AT" | "ID" | "NIT" | undefined;
    in?: Array<"AT" | "ID" | "NIT"> | undefined;
    notIn?: Array<"AT" | "ID" | "NIT"> | undefined;
    not?: NestedEnumEnum_IdentificationTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_IdentificationTypeFilter | undefined;
    _max?: NestedEnumEnum_IdentificationTypeFilter | undefined;
}
