export declare class CompanyCreateWithoutMultimediaInput {
    id?: string | undefined;
    name: string;
    businessName: string;
    identificationType?: "AT" | "ID" | "NIT" | undefined;
    identification: string;
    nEmployees: number;
    logo?: string | undefined;
    state?: "Aprobado" | "Rechazado" | "Pendiente" | undefined;
}
