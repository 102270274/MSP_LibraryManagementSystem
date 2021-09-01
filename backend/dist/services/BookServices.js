"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookDAO_1 = require("../db/BookDAO");
const Services_1 = require("./Services");
class BookServices extends Services_1.default {
    constructor() {
        super();
        this._dao = new BookDAO_1.default();
        this._validQueryParameters = ["isbn", "title", "author", "genre", "type", "yearPublished", "status", "locationAisle"];
    }
    retrieveBooks(req) {
        let data;
        if (this.checkForQueryParameters(req.query)) {
            if (!this.validateQueryParameters(req.query, this._validQueryParameters)) {
                return this.createResponseData(false, "One or more query parameters was invalid"); // If query parameters are invalid
            }
            data = this._dao.dbGetBooksByParameter(req.query); // If query parameters exist
        }
        else {
            data = this._dao.dbGetAllBooks(); // If query parameters do not exist
        }
        return this.createResponseData(true, "Request fulfilled successfully", data);
    }
    createBook(data) {
    }
    updateBook(data) {
    }
    deleteBook(id) {
    }
    get validQueryParameters() {
        return this._validQueryParameters;
    }
}
exports.default = BookServices;
