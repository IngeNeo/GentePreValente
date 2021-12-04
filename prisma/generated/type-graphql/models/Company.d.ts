import { Multimedia } from "../models/Multimedia";
import { CompanyCount } from "../resolvers/outputs/CompanyCount";
export declare class Company {
    id: string;
    name: string;
    businessName: string;
    nit: string;
    identification: string;
    nEmployees: number;
    logo: string;
    state: "Aprobado" | "Rechazado" | "Pendiente";
    multimedia?: Multimedia[];
    _count: CompanyCount;
}
