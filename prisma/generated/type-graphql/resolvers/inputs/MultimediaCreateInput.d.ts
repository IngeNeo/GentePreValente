import { CompanyCreateNestedOneWithoutMultimediaInput } from "../inputs/CompanyCreateNestedOneWithoutMultimediaInput";
export declare class MultimediaCreateInput {
    id?: string | undefined;
    description: string;
    url: string;
    company: CompanyCreateNestedOneWithoutMultimediaInput;
}
