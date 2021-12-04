import { MultimediaCreateNestedManyWithoutCompanyInput } from "../inputs/MultimediaCreateNestedManyWithoutCompanyInput";
export declare class CompanyCreateInput {
    id?: string | undefined;
    name: string;
    businessName: string;
    nit: string;
    identification: string;
    nEmployees: number;
    logo: string;
    state?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
    multimedia?: MultimediaCreateNestedManyWithoutCompanyInput | undefined;
}
