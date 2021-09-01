import { Application } from "express";

abstract class Routes {

    protected _parentApp: Application;

    constructor(app){
        this._parentApp = app;
    }

    public initializeAllRoutes(): void{
        this.initGetRoutes();
        this.initPostRoutes();
        this.initPutRoutes();
        this.initDeleteRoutes();
    }
    
    abstract initGetRoutes(): void

    abstract initPostRoutes(): void

    abstract initPutRoutes(): void

    abstract initDeleteRoutes(): void

}

export default Routes;