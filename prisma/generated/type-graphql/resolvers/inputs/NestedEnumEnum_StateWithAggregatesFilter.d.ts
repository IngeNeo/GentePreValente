import { NestedEnumEnum_StateFilter } from "../inputs/NestedEnumEnum_StateFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_StateWithAggregatesFilter {
    equals?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
    in?: Array<"Aprobado" | "Rechazado" | "Pendiente"> | undefined;
    notIn?: Array<"Aprobado" | "Rechazado" | "Pendiente"> | undefined;
    not?: NestedEnumEnum_StateWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_StateFilter | undefined;
    _max?: NestedEnumEnum_StateFilter | undefined;
}
