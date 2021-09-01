"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Routes_1 = require("./Routes");
const BookServices_1 = require("../services/BookServices");
class BookRoutes extends Routes_1.default {
    constructor(app) {
        super(app);
        this._services = new BookServices_1.default();
    }
    initGetRoutes() {
        // Get All Books
        this._parentApp.get("/hcl/books", (req, res) => {
            res.status(200).json(this._services.retrieveBooks(req));
        });
    }
    initPostRoutes() {
        // Create Book
        this._parentApp.post("/hcl/books", (req, res) => {
            // Post books
        });
    }
    initPutRoutes() {
        // Update Book
        this._parentApp.put("/hcl/books", (req, res) => {
            // Put Book
        });
    }
    initDeleteRoutes() {
        // Delete Book
        this._parentApp.delete("/hcl/books", (req, res) => {
            // Delete Book
        });
    }
}
exports.default = BookRoutes;
