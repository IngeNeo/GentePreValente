import { NestedEnumEnum_StateFilter } from "../inputs/NestedEnumEnum_StateFilter";
import { NestedEnumEnum_StateWithAggregatesFilter } from "../inputs/NestedEnumEnum_StateWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_StateWithAggregatesFilter {
    equals?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
    in?: Array<"Aprobado" | "Rechazado" | "Pendiente"> | undefined;
    notIn?: Array<"Aprobado" | "Rechazado" | "Pendiente"> | undefined;
    not?: NestedEnumEnum_StateWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_StateFilter | undefined;
    _max?: NestedEnumEnum_StateFilter | undefined;
}
