/* 
    Title: BookDAO
    Description: The data access object for books.
    Author: Matt Dixon
    Last Modified: 15/09/21
*/

import Book from "../utils/BookType";
import ResponseData from "../utils/ResponseDataType";
import DAO from "./DAO";
import { Request } from "express";

var mysql = require("mysql");
var con = mysql.createConnection({
    host: "swe20001db.cpeh8ik5mv9c.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password: "!$Dk7*6owX4Uq2S99nZ!W227",
    database: "HawthornCityLibrary"
})

con.connect(function(err) {
    if(err) console.error(err)
    else console.log("Connection successful.")
});

class BookDAO extends DAO {

    dbGetAllBooks() {
        con.query("SELECT * FROM HclBooks", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });

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
        }]

        return returnedData;
    }

    dbGetBooksByParameter(parameters) {

        var isbn = "%%";    
        var title = "%%";
        var authorFirstName = "%%";
        var authorLastName = "%%";
        var genre = "%%";
        var type = "%%";
        var yearPublished = "%%";
        var status = "%%";
        var locationAisle = "%%";

        for(var i = 0; i < Object.keys(parameters).length; i++){
            switch(true){
                case parameters.isbn != null && isbn == "%%":
                    isbn = parameters.isbn;
                    break;
                case parameters.title != null && title == "%%":
                    title = parameters.title;
                    break;
                case parameters.authorFirstName != null && authorFirstName == "%%":
                    authorFirstName = parameters.authorFirstName;
                    break;
                case parameters.authorLastName != null && authorLastName == "%%":
                    authorLastName = parameters.authorLastName;
                    break;
                case parameters.genre != null && genre == "%%":
                    genre = parameters.genre;
                    break;
                case parameters.type != null && type == "%%":
                    type = parameters.type;
                    break;
                case parameters.yearPublished != null && yearPublished == "%%":
                    yearPublished = parameters.yearPublished;
                    break;
                case parameters.status != null && status == "%%":
                    status = parameters.status;
                    break;
                case parameters.locationAisle != null && locationAisle == "%%":
                    locationAisle = parameters.locationAisle;
                    break;
            }            
        }

        var sql = `SELECT * FROM HclBooks WHERE isbn LIKE '${isbn}' AND title LIKE '${title}' AND authorFirstName LIKE '${authorFirstName}' AND authorLastName LIKE '${authorLastName}' AND genre LIKE '${genre}' AND type LIKE '${type}' AND yearPublished LIKE '${yearPublished}' AND status LIKE '${status}' AND locationAisle LIKE '${locationAisle}'`;
        
        con.query(sql, function (err, result) {
            if (err) console.error(err);
            console.log(result);
            console.log(sql);
        });
    }

    dbAddBook(book: Book){
        var isbn = book.isbn;
        var title = book.title;
        var authorFirstName = book.authorFirstName;
        var authorLastName = book.authorLastName;
        var genre = book.genre;
        var type = book.type;
        var yearPublished = book.yearPublished;
        var status = book.status;
        var locationAisle = book.locationAisle;
       
        var sql = "INSERT INTO HclBooks (isbn, title, authorFirstName, authorLastName, genre, type, yearPublished, status, locationAisle) VALUES (?);";
        var values = [isbn, title, authorFirstName, authorLastName, genre, type, yearPublished, status, locationAisle]

        con.query(sql, [values], function (err, result) {
            if (err) console.error(err);
            console.log(result);
        })
    }

    dbEditBook(book){
        let thingsToUpdate = [];
        let updateValues = [];
        let sql = "";
        var isbn = book.isbn

        for(var i = 0; i < Object.keys(book).length; i++){
            switch(true){
                case book.title != null && !thingsToUpdate.includes("title"):
                    thingsToUpdate.push("title")
                    updateValues.push(book.title)
                    break;
                case book.authorFirstName != null && !thingsToUpdate.includes("authorFirstName"):
                    thingsToUpdate.push("authorFirstName")
                    updateValues.push(book.authorFirstName)
                    break;
                case book.authorLastName != null && !thingsToUpdate.includes("authorLastName"):
                    thingsToUpdate.push("authorLastName")
                    updateValues.push(book.authorLastName)
                    break;
                case book.genre != null && !thingsToUpdate.includes("genre"):
                    thingsToUpdate.push("genre")
                    updateValues.push(book.genre)
                    break;
                case book.type != null && !thingsToUpdate.includes("type"):
                    thingsToUpdate.push("type")
                    updateValues.push(book.type)
                    break;
                case book.yearPublished != null && !thingsToUpdate.includes("yearPublished"):
                    thingsToUpdate.push("yearPublished")
                    updateValues.push(book.yearPublished)
                    break;
                case book.status != null && !thingsToUpdate.includes("status"):
                    thingsToUpdate.push("status")
                    updateValues.push(book.status)
                    break;
                case book.locationAisle != null && !thingsToUpdate.includes("locationAisle"):
                    thingsToUpdate.push("locationAisle")
                    updateValues.push(book.locationAisle)
                    break;
            }
        }
        
        switch(thingsToUpdate.length){
            case 1:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 2:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 3:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 4:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + "', " + thingsToUpdate[3] + " = '" + updateValues[3] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 5:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + "', " + thingsToUpdate[3] + " = '" + updateValues[3] + "', " + thingsToUpdate[4] + " = '" + updateValues[4] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 6:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + "', " + thingsToUpdate[3] + " = '" + updateValues[3] + "', " + thingsToUpdate[4] + " = '" + updateValues[4] + "', " + thingsToUpdate[5] + " = '" + updateValues[5] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 7:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + "', " + thingsToUpdate[3] + " = '" + updateValues[3] + "', " + thingsToUpdate[4] + " = '" + updateValues[4] + "', " + thingsToUpdate[5] + " = '" + updateValues[5] + "', " + thingsToUpdate[6] + " = '" + updateValues[6] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 8:
                sql = "UPDATE HclBooks SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + "', " + thingsToUpdate[3] + " = '" + updateValues[3] + "', " + thingsToUpdate[4] + " = '" + updateValues[4] + "', " + thingsToUpdate[5] + " = '" + updateValues[5] + "', " + thingsToUpdate[6] + " = '" + updateValues[6] + "', " + thingsToUpdate[7] + " = '" + updateValues[7] + "' WHERE isbn = " + isbn;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
        }
    }

    dbDeleteBook(id: number){
        var sql = "DELETE FROM HclBooks WHERE isbn = ?;";
        con.query(sql, id, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
    }

}

export default BookDAO;