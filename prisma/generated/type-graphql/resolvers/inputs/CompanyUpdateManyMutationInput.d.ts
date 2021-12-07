import { EnumEnum_IdentificationTypeFieldUpdateOperationsInput } from "../inputs/EnumEnum_IdentificationTypeFieldUpdateOperationsInput";
import { EnumEnum_StateFieldUpdateOperationsInput } from "../inputs/EnumEnum_StateFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    businessName?: StringFieldUpdateOperationsInput | undefined;
    identificationType?: EnumEnum_IdentificationTypeFieldUpdateOperationsInput | undefined;
    identification?: StringFieldUpdateOperationsInput | undefined;
    nEmployees?: IntFieldUpdateOperationsInput | undefined;
    logo?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: EnumEnum_StateFieldUpdateOperationsInput | undefined;
}
