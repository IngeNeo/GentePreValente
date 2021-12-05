"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_IdentificationType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Enum_IdentificationType;
(function (Enum_IdentificationType) {
    Enum_IdentificationType["AT"] = "AT";
    Enum_IdentificationType["ID"] = "ID";
    Enum_IdentificationType["NIT"] = "NIT";
})(Enum_IdentificationType = exports.Enum_IdentificationType || (exports.Enum_IdentificationType = {}));
TypeGraphQL.registerEnumType(Enum_IdentificationType, {
    name: "Enum_IdentificationType",
    description: undefined,
});
