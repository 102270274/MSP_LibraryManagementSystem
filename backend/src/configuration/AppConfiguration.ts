import * as express from "express";

class AppConfiguration {

    private _application: express.Application;

    constructor() {
        this._application = express();
        this.configure();
    }

    private configure(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    get app(): express.Application {
        return this._application;
    }
}

export default AppConfiguration;
