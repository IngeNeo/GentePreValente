import { EnumEnum_StateFieldUpdateOperationsInput } from "../inputs/EnumEnum_StateFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MultimediaUpdateManyWithoutCompanyInput } from "../inputs/MultimediaUpdateManyWithoutCompanyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    businessName?: StringFieldUpdateOperationsInput | undefined;
    nit?: StringFieldUpdateOperationsInput | undefined;
    identification?: StringFieldUpdateOperationsInput | undefined;
    nEmployees?: IntFieldUpdateOperationsInput | undefined;
    logo?: StringFieldUpdateOperationsInput | undefined;
    state?: EnumEnum_StateFieldUpdateOperationsInput | undefined;
    multimedia?: MultimediaUpdateManyWithoutCompanyInput | undefined;
}
