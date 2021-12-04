import { StringFilter } from "../inputs/StringFilter";
export declare class MultimediaScalarWhereInput {
    AND?: MultimediaScalarWhereInput[] | undefined;
    OR?: MultimediaScalarWhereInput[] | undefined;
    NOT?: MultimediaScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    description?: StringFilter | undefined;
    url?: StringFilter | undefined;
    companyId?: StringFilter | undefined;
}
