"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let instanceLogger;
const getLogger = () => instanceLogger;
exports.logger = getLogger();
exports.registerLogger = (logger) => {
    instanceLogger = logger;
};
