import { CompanyCreateOrConnectWithoutMultimediaInput } from "../inputs/CompanyCreateOrConnectWithoutMultimediaInput";
import { CompanyCreateWithoutMultimediaInput } from "../inputs/CompanyCreateWithoutMultimediaInput";
import { CompanyUpdateWithoutMultimediaInput } from "../inputs/CompanyUpdateWithoutMultimediaInput";
import { CompanyUpsertWithoutMultimediaInput } from "../inputs/CompanyUpsertWithoutMultimediaInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyUpdateOneRequiredWithoutMultimediaInput {
    create?: CompanyCreateWithoutMultimediaInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutMultimediaInput | undefined;
    upsert?: CompanyUpsertWithoutMultimediaInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
    update?: CompanyUpdateWithoutMultimediaInput | undefined;
}
