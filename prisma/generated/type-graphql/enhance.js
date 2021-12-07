"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Company: crudResolvers.CompanyCrudResolver,
    Multimedia: crudResolvers.MultimediaCrudResolver
};
const actionResolversMap = {
    Company: {
        company: actionResolvers.FindUniqueCompanyResolver,
        findFirstCompany: actionResolvers.FindFirstCompanyResolver,
        companies: actionResolvers.FindManyCompanyResolver,
        createCompany: actionResolvers.CreateCompanyResolver,
        createManyCompany: actionResolvers.CreateManyCompanyResolver,
        deleteCompany: actionResolvers.DeleteCompanyResolver,
        updateCompany: actionResolvers.UpdateCompanyResolver,
        deleteManyCompany: actionResolvers.DeleteManyCompanyResolver,
        updateManyCompany: actionResolvers.UpdateManyCompanyResolver,
        upsertCompany: actionResolvers.UpsertCompanyResolver,
        aggregateCompany: actionResolvers.AggregateCompanyResolver,
        groupByCompany: actionResolvers.GroupByCompanyResolver
    },
    Multimedia: {
        multimedia: actionResolvers.FindUniqueMultimediaResolver,
        findFirstMultimedia: actionResolvers.FindFirstMultimediaResolver,
        multimedias: actionResolvers.FindManyMultimediaResolver,
        createMultimedia: actionResolvers.CreateMultimediaResolver,
        createManyMultimedia: actionResolvers.CreateManyMultimediaResolver,
        deleteMultimedia: actionResolvers.DeleteMultimediaResolver,
        updateMultimedia: actionResolvers.UpdateMultimediaResolver,
        deleteManyMultimedia: actionResolvers.DeleteManyMultimediaResolver,
        updateManyMultimedia: actionResolvers.UpdateManyMultimediaResolver,
        upsertMultimedia: actionResolvers.UpsertMultimediaResolver,
        aggregateMultimedia: actionResolvers.AggregateMultimediaResolver,
        groupByMultimedia: actionResolvers.GroupByMultimediaResolver
    }
};
const crudResolversInfo = {
    Company: ["company", "findFirstCompany", "companies", "createCompany", "createManyCompany", "deleteCompany", "updateCompany", "deleteManyCompany", "updateManyCompany", "upsertCompany", "aggregateCompany", "groupByCompany"],
    Multimedia: ["multimedia", "findFirstMultimedia", "multimedias", "createMultimedia", "createManyMultimedia", "deleteMultimedia", "updateMultimedia", "deleteManyMultimedia", "updateManyMultimedia", "upsertMultimedia", "aggregateMultimedia", "groupByMultimedia"]
};
const argsInfo = {
    FindUniqueCompanyArgs: ["where"],
    FindFirstCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateCompanyArgs: ["data"],
    CreateManyCompanyArgs: ["data", "skipDuplicates"],
    DeleteCompanyArgs: ["where"],
    UpdateCompanyArgs: ["data", "where"],
    DeleteManyCompanyArgs: ["where"],
    UpdateManyCompanyArgs: ["data", "where"],
    UpsertCompanyArgs: ["where", "create", "update"],
    AggregateCompanyArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByCompanyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueMultimediaArgs: ["where"],
    FindFirstMultimediaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMultimediaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateMultimediaArgs: ["data"],
    CreateManyMultimediaArgs: ["data", "skipDuplicates"],
    DeleteMultimediaArgs: ["where"],
    UpdateMultimediaArgs: ["data", "where"],
    DeleteManyMultimediaArgs: ["where"],
    UpdateManyMultimediaArgs: ["data", "where"],
    UpsertMultimediaArgs: ["where", "create", "update"],
    AggregateMultimediaArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByMultimediaArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Company: relationResolvers.CompanyRelationsResolver,
    Multimedia: relationResolvers.MultimediaRelationsResolver
};
const relationResolversInfo = {
    Company: ["multimedia"],
    Multimedia: ["company"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Company: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    Multimedia: ["id", "description", "url", "companyId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateCompany: ["_count", "_avg", "_sum", "_min", "_max"],
    CompanyGroupBy: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateMultimedia: ["_count", "_min", "_max"],
    MultimediaGroupBy: ["id", "description", "url", "companyId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    CompanyCount: ["multimedia"],
    CompanyCountAggregate: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state", "_all"],
    CompanyAvgAggregate: ["nEmployees"],
    CompanySumAggregate: ["nEmployees"],
    CompanyMinAggregate: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    CompanyMaxAggregate: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    MultimediaCountAggregate: ["id", "description", "url", "companyId", "_all"],
    MultimediaMinAggregate: ["id", "description", "url", "companyId"],
    MultimediaMaxAggregate: ["id", "description", "url", "companyId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    CompanyWhereInput: ["AND", "OR", "NOT", "id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state", "multimedia"],
    CompanyOrderByWithRelationInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state", "multimedia"],
    CompanyWhereUniqueInput: ["id", "identification"],
    CompanyOrderByWithAggregationInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state", "_count", "_avg", "_max", "_min", "_sum"],
    CompanyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    MultimediaWhereInput: ["AND", "OR", "NOT", "id", "description", "url", "company", "companyId"],
    MultimediaOrderByWithRelationInput: ["id", "description", "url", "company", "companyId"],
    MultimediaWhereUniqueInput: ["id"],
    MultimediaOrderByWithAggregationInput: ["id", "description", "url", "companyId", "_count", "_max", "_min"],
    MultimediaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "description", "url", "companyId"],
    CompanyCreateInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state", "multimedia"],
    CompanyUpdateInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state", "multimedia"],
    CompanyCreateManyInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    CompanyUpdateManyMutationInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    MultimediaCreateInput: ["id", "description", "url", "company"],
    MultimediaUpdateInput: ["id", "description", "url", "company"],
    MultimediaCreateManyInput: ["id", "description", "url", "companyId"],
    MultimediaUpdateManyMutationInput: ["id", "description", "url"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumEnum_IdentificationTypeFilter: ["equals", "in", "notIn", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumEnum_StateFilter: ["equals", "in", "notIn", "not"],
    MultimediaListRelationFilter: ["every", "some", "none"],
    MultimediaOrderByRelationAggregateInput: ["_count"],
    CompanyCountOrderByAggregateInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    CompanyAvgOrderByAggregateInput: ["nEmployees"],
    CompanyMaxOrderByAggregateInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    CompanyMinOrderByAggregateInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    CompanySumOrderByAggregateInput: ["nEmployees"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumEnum_IdentificationTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumEnum_StateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    CompanyRelationFilter: ["is", "isNot"],
    MultimediaCountOrderByAggregateInput: ["id", "description", "url", "companyId"],
    MultimediaMaxOrderByAggregateInput: ["id", "description", "url", "companyId"],
    MultimediaMinOrderByAggregateInput: ["id", "description", "url", "companyId"],
    MultimediaCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumEnum_IdentificationTypeFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumEnum_StateFieldUpdateOperationsInput: ["set"],
    MultimediaUpdateManyWithoutCompanyInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CompanyCreateNestedOneWithoutMultimediaInput: ["create", "connectOrCreate", "connect"],
    CompanyUpdateOneRequiredWithoutMultimediaInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumEnum_IdentificationTypeFilter: ["equals", "in", "notIn", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumEnum_StateFilter: ["equals", "in", "notIn", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedEnumEnum_IdentificationTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_StateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    MultimediaCreateWithoutCompanyInput: ["id", "description", "url"],
    MultimediaCreateOrConnectWithoutCompanyInput: ["where", "create"],
    MultimediaCreateManyCompanyInputEnvelope: ["data", "skipDuplicates"],
    MultimediaUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
    MultimediaUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
    MultimediaUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
    MultimediaScalarWhereInput: ["AND", "OR", "NOT", "id", "description", "url", "companyId"],
    CompanyCreateWithoutMultimediaInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    CompanyCreateOrConnectWithoutMultimediaInput: ["where", "create"],
    CompanyUpsertWithoutMultimediaInput: ["update", "create"],
    CompanyUpdateWithoutMultimediaInput: ["id", "name", "businessName", "identificationType", "identification", "nEmployees", "logo", "state"],
    MultimediaCreateManyCompanyInput: ["id", "description", "url"],
    MultimediaUpdateWithoutCompanyInput: ["id", "description", "url"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
