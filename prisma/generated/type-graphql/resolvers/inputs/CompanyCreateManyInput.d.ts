export declare class CompanyCreateManyInput {
    id?: string | undefined;
    name: string;
    businessName: string;
    nit: string;
    identification: string;
    nEmployees: number;
    logo: string;
    state?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
}