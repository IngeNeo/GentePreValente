import { CompanyCreateOrConnectWithoutMultimediaInput } from "../inputs/CompanyCreateOrConnectWithoutMultimediaInput";
import { CompanyCreateWithoutMultimediaInput } from "../inputs/CompanyCreateWithoutMultimediaInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyCreateNestedOneWithoutMultimediaInput {
    create?: CompanyCreateWithoutMultimediaInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutMultimediaInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
}
