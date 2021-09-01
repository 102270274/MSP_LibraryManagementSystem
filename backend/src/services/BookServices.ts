import BookDAO from "../db/BookDAO";
import BookType from "../utils/BookType";
import ResponseData from "../utils/ResponseDataType";
import { Request } from "express";
import Services from "./Services";

class BookServices extends Services {

    private _dao: BookDAO;
    private _validQueryParameters: Array<string>;

    constructor(){
        super();
        this._dao = new BookDAO();
        this._validQueryParameters = ["isbn", "title", "author", "genre", "type", "yearPublished", "status", "locationAisle"];
    }

    public retrieveBooks(req: Request): ResponseData {
        let successStatus: boolean;
        let message: string;
        let data: Array<BookType>;

        if(this.checkForQueryParameters(req.query)){
            if(!this.validateQueryParameters(req.query, this._validQueryParameters)){
                // If query parameters exist but are invalid, don't fetch data
                successStatus = false;
                message = "One or more query parameters is invalid";
            } else {
                // If query parameters exist and are valid, fetch data based on parameters
                successStatus = true;
                message = "Book data successfully fetched using query parameters"
                data = this._dao.dbGetBooksByParameter(req.query); 
            }
        } else {
            // If query parameters do not exist at all, fetch all book data
            successStatus = true;
            message = "All book data successfully fetched"
            data = this._dao.dbGetAllBooks(); 
        }

        return this.createResponseData(successStatus, message, data); // Return response       
    }

    createBook(data: BookType){
    }

    updateBook(data: {field: string, value: string}){
    }

    deleteBook(id: number){
    }

    public get validQueryParameters(){
        return this._validQueryParameters;
    }

}

export default BookServices;