import { CompanyOrderByWithRelationInput } from "../inputs/CompanyOrderByWithRelationInput";
export declare class MultimediaOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    company?: CompanyOrderByWithRelationInput | undefined;
    companyId?: "asc" | "desc" | undefined;
}
