"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    constructor(app) {
        this._parentApp = app;
    }
    initializeAllRoutes() {
        this.initGetRoutes();
        this.initPostRoutes();
        this.initPutRoutes();
        this.initDeleteRoutes();
    }
}
exports.default = Routes;
