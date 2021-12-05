export declare class CompanyCreateManyInput {
    id?: string | undefined;
    name: string;
    businessName: string;
    identificationType?: "AT" | "ID" | "NIT" | undefined;
    identification: string;
    nEmployees: number;
    logo: string;
    state?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
}
