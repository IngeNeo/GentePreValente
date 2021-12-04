"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaCreateManyCompanyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MultimediaCreateManyCompanyInput_1 = require("../inputs/MultimediaCreateManyCompanyInput");
let MultimediaCreateManyCompanyInputEnvelope = class MultimediaCreateManyCompanyInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MultimediaCreateManyCompanyInput_1.MultimediaCreateManyCompanyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MultimediaCreateManyCompanyInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MultimediaCreateManyCompanyInputEnvelope.prototype, "skipDuplicates", void 0);
MultimediaCreateManyCompanyInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MultimediaCreateManyCompanyInputEnvelope", {
        isAbstract: true
    })
], MultimediaCreateManyCompanyInputEnvelope);
exports.MultimediaCreateManyCompanyInputEnvelope = MultimediaCreateManyCompanyInputEnvelope;
