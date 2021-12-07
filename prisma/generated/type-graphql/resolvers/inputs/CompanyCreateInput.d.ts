import { MultimediaCreateNestedManyWithoutCompanyInput } from "../inputs/MultimediaCreateNestedManyWithoutCompanyInput";
export declare class CompanyCreateInput {
    id?: string | undefined;
    name: string;
    businessName: string;
    identificationType?: "AT" | "ID" | "NIT" | undefined;
    identification: string;
    nEmployees: number;
    logo?: string | undefined;
    state?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
    multimedia?: MultimediaCreateNestedManyWithoutCompanyInput | undefined;
}
