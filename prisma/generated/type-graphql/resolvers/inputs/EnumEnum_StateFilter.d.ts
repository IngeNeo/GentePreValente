import { NestedEnumEnum_StateFilter } from "../inputs/NestedEnumEnum_StateFilter";
export declare class EnumEnum_StateFilter {
    equals?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
    in?: Array<"Aprobado" | "Rechazado" | "Pendiente"> | undefined;
    notIn?: Array<"Aprobado" | "Rechazado" | "Pendiente"> | undefined;
    not?: NestedEnumEnum_StateFilter | undefined;
}
