import { CompanyUpdateOneRequiredWithoutMultimediaInput } from "../inputs/CompanyUpdateOneRequiredWithoutMultimediaInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MultimediaUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutMultimediaInput | undefined;
}
