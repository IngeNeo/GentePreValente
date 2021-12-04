import { MultimediaOrderByRelationAggregateInput } from "../inputs/MultimediaOrderByRelationAggregateInput";
export declare class CompanyOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    businessName?: "asc" | "desc" | undefined;
    nit?: "asc" | "desc" | undefined;
    identification?: "asc" | "desc" | undefined;
    nEmployees?: "asc" | "desc" | undefined;
    logo?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    multimedia?: MultimediaOrderByRelationAggregateInput | undefined;
}
