"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let instanceLogger = {
    fatal: (obj, msg, ...args) => typeof obj === 'string' ? console.error(obj) : console.error(msg),
    error: (obj, msg, ...args) => typeof obj === 'string' ? console.error(obj) : console.error(msg),
    warn: (obj, msg, ...args) => typeof obj === 'string' ? console.error(obj) : console.error(msg),
    info: (obj, msg, ...args) => typeof obj === 'string' ? console.error(obj) : console.error(msg),
    debug: (obj, msg, ...args) => typeof obj === 'string' ? console.error(obj) : console.error(msg),
    trace: (obj, msg, ...args) => typeof obj === 'string' ? console.error(obj) : console.error(msg)
};
const getLogger = () => instanceLogger;
exports.logger = getLogger();
exports.registerLogger = (logger) => {
    instanceLogger = logger;
};
