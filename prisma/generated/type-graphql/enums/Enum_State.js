"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_State = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Enum_State;
(function (Enum_State) {
    Enum_State["Aprobado"] = "Aprobado";
    Enum_State["Rechazado"] = "Rechazado";
    Enum_State["Pendiente"] = "Pendiente";
})(Enum_State = exports.Enum_State || (exports.Enum_State = {}));
TypeGraphQL.registerEnumType(Enum_State, {
    name: "Enum_State",
    description: undefined,
});
