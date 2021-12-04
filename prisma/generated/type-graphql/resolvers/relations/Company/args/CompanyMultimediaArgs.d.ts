import { MultimediaOrderByWithRelationInput } from "../../../inputs/MultimediaOrderByWithRelationInput";
import { MultimediaWhereInput } from "../../../inputs/MultimediaWhereInput";
import { MultimediaWhereUniqueInput } from "../../../inputs/MultimediaWhereUniqueInput";
export declare class CompanyMultimediaArgs {
    where?: MultimediaWhereInput | undefined;
    orderBy?: MultimediaOrderByWithRelationInput[] | undefined;
    cursor?: MultimediaWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "description" | "url" | "companyId"> | undefined;
}
