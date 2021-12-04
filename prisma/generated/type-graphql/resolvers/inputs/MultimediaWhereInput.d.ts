import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MultimediaWhereInput {
    AND?: MultimediaWhereInput[] | undefined;
    OR?: MultimediaWhereInput[] | undefined;
    NOT?: MultimediaWhereInput[] | undefined;
    id?: StringFilter | undefined;
    description?: StringFilter | undefined;
    url?: StringFilter | undefined;
    company?: CompanyRelationFilter | undefined;
    companyId?: StringFilter | undefined;
}
