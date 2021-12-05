import { NestedEnumEnum_IdentificationTypeFilter } from "../inputs/NestedEnumEnum_IdentificationTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_IdentificationTypeWithAggregatesFilter {
    equals?: "AT" | "ID" | "NIT" | undefined;
    in?: Array<"AT" | "ID" | "NIT"> | undefined;
    notIn?: Array<"AT" | "ID" | "NIT"> | undefined;
    not?: NestedEnumEnum_IdentificationTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_IdentificationTypeFilter | undefined;
    _max?: NestedEnumEnum_IdentificationTypeFilter | undefined;
}
