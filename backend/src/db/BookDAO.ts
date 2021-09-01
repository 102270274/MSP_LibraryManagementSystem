import BookType from "../utils/BookType";
import ResponseData from "../utils/ResponseDataType";
import DAO from "./DAO";
import { Request } from "express";

class BookDAO extends DAO {

    dbGetAllBooks(): Array<BookType> {
        // TODO: Construct SQL query here and return as array of BookType objects

        // DUMMY DATA
        let returnedData: Array<BookType> = [{
            isbn: "29384721", 
            title: "Nineteen Eighty Four",
            authorFirstName: "George",
            authorLastName: "Orwell",
            genre: "Political",
            type: "Fiction",
            yearPublished: 1948,
            status: "Borrowed",
            locationAisle: "O"
        }]

        return returnedData;
    }

    dbGetBooksByParameter(parameters: Request.query): Array<BookType>{
        // TODO: Construct SQL query here and return as array of BookType objects

        // DUMMY DATA
        let returnedData: Array<BookType> = [{
            isbn: "29384721", 
            title: "Animal Farm",
            authorFirstName: "George",
            authorLastName: "Orwell",
            genre: "Political",
            type: "Fiction",
            yearPublished: 1948,
            status: "Borrowed",
            locationAisle: "O"
        }]

        return returnedData;
    }

    dbAddBook(data: BookType){}

    dbEditBook(data: {field: string, value: string}){}

    dbDeleteBook(id: number){}

}

export default BookDAO;