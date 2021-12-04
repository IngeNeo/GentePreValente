import { EnumEnum_StateFilter } from "../inputs/EnumEnum_StateFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MultimediaListRelationFilter } from "../inputs/MultimediaListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CompanyWhereInput {
    AND?: CompanyWhereInput[] | undefined;
    OR?: CompanyWhereInput[] | undefined;
    NOT?: CompanyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    businessName?: StringFilter | undefined;
    nit?: StringFilter | undefined;
    identification?: StringFilter | undefined;
    nEmployees?: IntFilter | undefined;
    logo?: StringFilter | undefined;
    state?: EnumEnum_StateFilter | undefined;
    multimedia?: MultimediaListRelationFilter | undefined;
}
