/* 
    Title: CheckedOutBookDAO
    Description: The data access object for books.
    Author: Matt Dixon
    Last Modified: 15/09/21
*/

import CheckedOutBook from "../utils/CheckedOutBookType";
import DAO from "./DAO";

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

class CheckedOutBookDAO extends DAO {

    public dbGetAllCheckedOutBooks(){
        con.query("SELECT * FROM HclCheckedOutBooks", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    }

    public dbGetCheckedOutBooksByParameter(parameters){
        var id = "%%";
        var isbn = "%%";
        var memberId = "%%";
        var checkOutDate = "%%"; 
        var returnDate = "%%";
        var checkedOut = "%%";

        for(var i = 0; i < Object.keys(parameters).length; i++){
            switch(true){
                case parameters.id != null && id == "%%":
                    id = parameters.id;
                    break;
                case parameters.firstName != null && isbn == "%%":
                    isbn = parameters.isbn;
                    break;
                case parameters.memberId != null && memberId == "%%":
                    memberId = parameters.memberId;
                    break;
                case parameters.checkOutDate != null && checkOutDate == "%%":
                    checkOutDate = parameters.checkOutDate;
                    break;
                case parameters.returnDate != null && returnDate == "%%":
                    returnDate = parameters.returnDate;
                    break;
                case parameters.checkedOut != null && checkedOut == "%%":
                    checkedOut = parameters.checkedOut;
                    break;
            }
        }

        var sql = `SELECT * FROM HclCheckedOutBooks WHERE checkOutID LIKE '${id}' AND isbn LIKE '${isbn}' AND memberID LIKE '${memberId}' AND checkOutDate LIKE '${checkOutDate}' AND returnDate LIKE '${returnDate}' AND checkedOut LIKE '${checkedOut}'`;

        con.query(sql, function (err, result) {
            if (err) console.error(err);
            console.log(result);
            console.log(sql);
        });
    }

    public dbAddCheckedOutBook(checkedOutBook){
        var id = checkedOutBook.id;
        var isbn = checkedOutBook.isbn;
        var memberId = checkedOutBook.memberId;
        var checkOutDate = checkedOutBook.checkOutDate; 
        var returnDate = checkedOutBook.returnDate;
        var checkedOut = checkedOutBook.checkedOut;

        var sql = "INSERT INTO HclCheckedOutBooks (checkOutID, isbn, memberID, checkOutDate, returnDate, checkedOut) VALUES (?)";
        var values = [id, isbn, memberId, checkOutDate, returnDate, checkedOut]
        
        con.query(sql, [values], function (err, result) {
            if (err) console.error(err);
            console.log(result);
        })
    }

    public dbDeleteCheckedOutBook(id: number){
        var sql = "DELETE FROM HclCheckedOutBooks WHERE checkOutID = ?";
        con.query(sql, id, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
    }


}

export default CheckedOutBookDAO;