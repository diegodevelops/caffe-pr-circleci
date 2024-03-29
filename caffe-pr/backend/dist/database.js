"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_PORT = _a.POSTGRES_PORT, POSTGRES_TEST_HOST = _a.POSTGRES_TEST_HOST, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, POSTGRES_TEST_USER = _a.POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD = _a.POSTGRES_TEST_PASSWORD, ENV = _a.ENV;
var client;
console.log("ENV = ".concat(ENV));
if (ENV === 'test') {
    client = new pg_1.Pool({
        host: POSTGRES_TEST_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_TEST_USER,
        password: POSTGRES_TEST_PASSWORD
    });
}
if (ENV === 'dev') {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: parseInt(POSTGRES_PORT || ''),
        ssl: {
            rejectUnauthorized: false
        }
    });
}
exports.default = client;
