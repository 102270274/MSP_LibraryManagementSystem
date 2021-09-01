import { Request, Response } from "express";
import Routes from "./Routes";
import BookServices from "../services/BookServices";

class BookRoutes extends Routes {

    private _services: BookServices;

    constructor(app){
        super(app);
        this._services = new BookServices();
    }

    override initGetRoutes(): void{
        // Get All Books
        this._parentApp.get("/hcl/books", (req: Request, res: Response) => {
            res.status(200).json(this._services.retrieveBooks(req));
        })
    }

    override initPostRoutes(): void{
        // Create Book
        this._parentApp.post("/hcl/books", (req: Request, res: Response) => {
            // Post books
        })
    }

    override initPutRoutes(): void{
        // Update Book
        this._parentApp.put("/hcl/books", (req: Request, res: Response) => {
            // Put Book
        })
    }

    override initDeleteRoutes(){
        // Delete Book
        this._parentApp.delete("/hcl/books", (req: Request, res: Response) => {
            // Delete Book
        })
    }
}

export default BookRoutes;