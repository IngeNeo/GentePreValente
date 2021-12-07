"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaUpdateManyWithWhereWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaScalarWhereInput_1 = require("../inputs/MultimediaScalarWhereInput");
const MultimediaUpdateManyMutationInput_1 = require("../inputs/MultimediaUpdateManyMutationInput");
let MultimediaUpdateManyWithWhereWithoutCompanyInput = class MultimediaUpdateManyWithWhereWithoutCompanyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaScalarWhereInput_1.MultimediaScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaScalarWhereInput_1.MultimediaScalarWhereInput)
], MultimediaUpdateManyWithWhereWithoutCompanyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MultimediaUpdateManyMutationInput_1.MultimediaUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MultimediaUpdateManyMutationInput_1.MultimediaUpdateManyMutationInput)
], MultimediaUpdateManyWithWhereWithoutCompanyInput.prototype, "data", void 0);
MultimediaUpdateManyWithWhereWithoutCompanyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaUpdateManyWithWhereWithoutCompanyInput", {
        isAbstract: true
    })
], MultimediaUpdateManyWithWhereWithoutCompanyInput);
exports.MultimediaUpdateManyWithWhereWithoutCompanyInput = MultimediaUpdateManyWithWhereWithoutCompanyInput;
