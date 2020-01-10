"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pino_1 = tslib_1.__importDefault(require("pino"));
const logger_1 = require("@deboxsoft/logger");
exports.createLogger = (options) => {
    const logger = pino_1.default(options);
    logger_1.registerLogger(logger);
    return logger;
};
