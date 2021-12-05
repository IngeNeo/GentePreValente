import { EnumEnum_IdentificationTypeFieldUpdateOperationsInput } from "../inputs/EnumEnum_IdentificationTypeFieldUpdateOperationsInput";
import { EnumEnum_StateFieldUpdateOperationsInput } from "../inputs/EnumEnum_StateFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateWithoutMultimediaInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    businessName?: StringFieldUpdateOperationsInput | undefined;
    identificationType?: EnumEnum_IdentificationTypeFieldUpdateOperationsInput | undefined;
    identification?: StringFieldUpdateOperationsInput | undefined;
    nEmployees?: IntFieldUpdateOperationsInput | undefined;
    logo?: StringFieldUpdateOperationsInput | undefined;
    state?: EnumEnum_StateFieldUpdateOperationsInput | undefined;
}
