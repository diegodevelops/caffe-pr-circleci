"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_1 = __importDefault(require("./handlers/users"));
var products_1 = __importDefault(require("./handlers/products"));
var overview_1 = __importDefault(require("./handlers/overview"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = parseInt(process.env.PORT || '3000');
var address = "0.0.0.0:".concat(port);
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
(0, users_1.default)(app);
(0, products_1.default)(app);
(0, overview_1.default)(app);
app.listen(port, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = app;
