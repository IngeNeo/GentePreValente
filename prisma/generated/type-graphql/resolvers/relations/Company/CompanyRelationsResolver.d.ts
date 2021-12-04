import { Company } from "../../../models/Company";
import { Multimedia } from "../../../models/Multimedia";
import { CompanyMultimediaArgs } from "./args/CompanyMultimediaArgs";
export declare class CompanyRelationsResolver {
    multimedia(company: Company, ctx: any, args: CompanyMultimediaArgs): Promise<Multimedia[]>;
}
