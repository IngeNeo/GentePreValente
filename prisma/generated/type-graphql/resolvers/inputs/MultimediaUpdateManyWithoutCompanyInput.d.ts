import { MultimediaCreateManyCompanyInputEnvelope } from "../inputs/MultimediaCreateManyCompanyInputEnvelope";
import { MultimediaCreateOrConnectWithoutCompanyInput } from "../inputs/MultimediaCreateOrConnectWithoutCompanyInput";
import { MultimediaCreateWithoutCompanyInput } from "../inputs/MultimediaCreateWithoutCompanyInput";
import { MultimediaScalarWhereInput } from "../inputs/MultimediaScalarWhereInput";
import { MultimediaUpdateManyWithWhereWithoutCompanyInput } from "../inputs/MultimediaUpdateManyWithWhereWithoutCompanyInput";
import { MultimediaUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/MultimediaUpdateWithWhereUniqueWithoutCompanyInput";
import { MultimediaUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/MultimediaUpsertWithWhereUniqueWithoutCompanyInput";
import { MultimediaWhereUniqueInput } from "../inputs/MultimediaWhereUniqueInput";
export declare class MultimediaUpdateManyWithoutCompanyInput {
    create?: MultimediaCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: MultimediaCreateOrConnectWithoutCompanyInput[] | undefined;
    upsert?: MultimediaUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;
    createMany?: MultimediaCreateManyCompanyInputEnvelope | undefined;
    set?: MultimediaWhereUniqueInput[] | undefined;
    disconnect?: MultimediaWhereUniqueInput[] | undefined;
    delete?: MultimediaWhereUniqueInput[] | undefined;
    connect?: MultimediaWhereUniqueInput[] | undefined;
    update?: MultimediaUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;
    updateMany?: MultimediaUpdateManyWithWhereWithoutCompanyInput[] | undefined;
    deleteMany?: MultimediaScalarWhereInput[] | undefined;
}
