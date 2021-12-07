import { MultimediaCreateManyCompanyInputEnvelope } from "../inputs/MultimediaCreateManyCompanyInputEnvelope";
import { MultimediaCreateOrConnectWithoutCompanyInput } from "../inputs/MultimediaCreateOrConnectWithoutCompanyInput";
import { MultimediaCreateWithoutCompanyInput } from "../inputs/MultimediaCreateWithoutCompanyInput";
import { MultimediaWhereUniqueInput } from "../inputs/MultimediaWhereUniqueInput";
export declare class MultimediaCreateNestedManyWithoutCompanyInput {
    create?: MultimediaCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: MultimediaCreateOrConnectWithoutCompanyInput[] | undefined;
    createMany?: MultimediaCreateManyCompanyInputEnvelope | undefined;
    connect?: MultimediaWhereUniqueInput[] | undefined;
}
