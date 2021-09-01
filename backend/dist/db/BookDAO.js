"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookDAO {
    dbGetAllBooks() {
        // TODO: Construct SQL query here
        let returnedData = [{
                isbn: "29384721",
                title: "Nineteen Eighty Four",
                authorFirstName: "George",
                authorLastName: "Orwell",
                genre: "Political",
                type: "Fiction",
                yearPublished: 1948,
                status: "Borrowed",
                locationAisle: "O"
            }];
        return returnedData;
    }
    dbGetBooksByParameter(parameters) {
        // TODO: Construct SQL query here
        let returnedData = [{
                isbn: "29384721",
                title: "Nineteen Eighty Four",
                authorFirstName: "George",
                authorLastName: "Orwell",
                genre: "Political",
                type: "Fiction",
                yearPublished: 1948,
                status: "Borrowed",
                locationAisle: "O"
            }];
        return returnedData;
    }
    dbAddBook(data) { }
    dbEditBook(data) { }
    dbDeleteBook(id) { }
}
exports.default = BookDAO;
