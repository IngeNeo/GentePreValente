import { EnumEnum_IdentificationTypeFilter } from "../inputs/EnumEnum_IdentificationTypeFilter";
import { EnumEnum_StateFilter } from "../inputs/EnumEnum_StateFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MultimediaListRelationFilter } from "../inputs/MultimediaListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CompanyWhereInput {
    AND?: CompanyWhereInput[] | undefined;
    OR?: CompanyWhereInput[] | undefined;
    NOT?: CompanyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    businessName?: StringFilter | undefined;
    identificationType?: EnumEnum_IdentificationTypeFilter | undefined;
    identification?: StringFilter | undefined;
    nEmployees?: IntFilter | undefined;
    logo?: StringNullableFilter | undefined;
    state?: EnumEnum_StateFilter | undefined;
    multimedia?: MultimediaListRelationFilter | undefined;
}
