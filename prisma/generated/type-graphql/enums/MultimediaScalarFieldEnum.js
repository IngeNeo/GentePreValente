"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var MultimediaScalarFieldEnum;
(function (MultimediaScalarFieldEnum) {
    MultimediaScalarFieldEnum["id"] = "id";
    MultimediaScalarFieldEnum["description"] = "description";
    MultimediaScalarFieldEnum["url"] = "url";
    MultimediaScalarFieldEnum["companyId"] = "companyId";
})(MultimediaScalarFieldEnum = exports.MultimediaScalarFieldEnum || (exports.MultimediaScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MultimediaScalarFieldEnum, {
    name: "MultimediaScalarFieldEnum",
    description: undefined,
});
