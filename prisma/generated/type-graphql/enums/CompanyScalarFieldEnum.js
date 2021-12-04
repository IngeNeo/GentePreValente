"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var CompanyScalarFieldEnum;
(function (CompanyScalarFieldEnum) {
    CompanyScalarFieldEnum["id"] = "id";
    CompanyScalarFieldEnum["name"] = "name";
    CompanyScalarFieldEnum["businessName"] = "businessName";
    CompanyScalarFieldEnum["nit"] = "nit";
    CompanyScalarFieldEnum["identification"] = "identification";
    CompanyScalarFieldEnum["nEmployees"] = "nEmployees";
    CompanyScalarFieldEnum["logo"] = "logo";
    CompanyScalarFieldEnum["state"] = "state";
})(CompanyScalarFieldEnum = exports.CompanyScalarFieldEnum || (exports.CompanyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
    name: "CompanyScalarFieldEnum",
    description: undefined,
});
