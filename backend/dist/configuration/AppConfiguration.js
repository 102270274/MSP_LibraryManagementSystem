"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class AppConfiguration {
    constructor() {
        this._application = express();
        this.configure();
    }
    configure() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    get app() {
        return this._application;
    }
}
exports.default = AppConfiguration;
