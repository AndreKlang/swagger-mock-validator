"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCodes = [
    'spv.request.accept.incompatible',
    'spv.request.authorization.missing',
    'spv.request.body.incompatible',
    'spv.request.content-type.incompatible',
    'spv.request.header.incompatible',
    'spv.request.path-or-method.unknown',
    'spv.request.query.incompatible',
    'spv.response.body.incompatible',
    'spv.response.body.unknown',
    'spv.response.content-type.incompatible',
    'spv.response.header.incompatible',
    'spv.response.header.unknown',
    'spv.response.status.unknown'
];
const codeToType = (code) => (errorCodes.indexOf(code) > -1) ? 'error' : 'warning';
exports.default = {
    build: (options) => {
        const interaction = options.mockSegment.parentInteraction;
        const operation = options.specSegment.parentOperation;
        return {
            code: options.code,
            message: options.message,
            mockDetails: {
                interactionDescription: interaction.description,
                interactionState: interaction.state,
                location: options.mockSegment.location,
                mockFile: interaction.mockFile,
                value: options.mockSegment.value
            },
            source: options.source,
            specDetails: {
                location: options.specSegment.location,
                pathMethod: operation.method,
                pathName: operation.pathName,
                specFile: operation.specFile,
                value: options.specSegment.value
            },
            type: codeToType(options.code)
        };
    }
};