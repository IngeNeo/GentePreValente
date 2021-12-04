import { Company } from "../../../models/Company";
import { Multimedia } from "../../../models/Multimedia";
export declare class MultimediaRelationsResolver {
    company(multimedia: Multimedia, ctx: any): Promise<Company>;
}
