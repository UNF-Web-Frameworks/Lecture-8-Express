"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use('/static', express_1.default.static('public'));
app.get('/Dog', (req, res, next) => {
    res.write('Get the Dog');
    next();
});
app.get('/Dog', (req, res, next) => {
    res.write('Get the Dog 2');
    res.end();
});
app.post('/Dog', (req, res, next) => {
    res.send('Create the Dog');
});
app.patch('/Dog/:dogName', (req, res, next) => {
    res.send(`Update the Dog ${req.params.dogName}`);
});
app.use('/', (req, res, next) => {
    res.send('Hello World');
});
app.listen(3000);
//# sourceMappingURL=main.js.map