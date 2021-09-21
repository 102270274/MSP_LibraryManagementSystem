/* 
    Title: EmployeeDAO
    Description: The data access object for all Employee related functions in the REST API.
    Author: Matt Dixon
    Last Modified: 15/09/21
*/

import DAO from "./DAO";
import Employee from "../utils/EmployeeType";

var mysql = require('mysql');

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

class EmployeeDAO extends DAO {

    public dbGetAllEmployees(): Array<Employee> {
        
        con.query("SELECT * FROM HclEmployees", function (err, result, fields) {
            if (err) console.error(err);
            console.log(result);
        });

        let returnedData = [{
                id: 10923748,
                firstName: "Kai",
                lastName: "Chirnside",
                isManager: false,
                password: "password"
            }];
        return returnedData;
    }

    public dbGetEmployeesByParameters(parameters){
        var id = "%%";
        var firstName = "%%";
        var lastName = "%%";
        var isManager = "%%";

        for(var i = 0; i < Object.keys(parameters).length; i++){
            switch(true){
                case parameters.id != null && id == "%%":
                    id = parameters.id;
                    break;
                case parameters.firstName != null && firstName == "%%":
                    firstName = parameters.firstName;
                    break;
                case parameters.lastName != null && lastName == "%%":
                    lastName = parameters.lastName;
                    break;
                case parameters.isManager != null && isManager == "%%":
                    isManager = parameters.isManager;
                    break;
            }            
        }

        var sql = `SELECT * FROM HclEmployees WHERE employeeID LIKE '${id}' AND employeeFirstName LIKE '${firstName}' AND employeeLastName LIKE '${lastName}' AND isManager LIKE '${isManager}'`
        
        con.query(sql, function (err, result) {
            if (err) console.error(err);
            console.log(result);
            console.log(sql);
        });

        let returnedData = [{
                id: 10923748,
                firstName: "Kai",
                lastName: "Chirnside",
                isManager: false,
                password: "password"
            }];
        return returnedData;
    }

    public dbAddEmployee(employee){
        var id = employee.id;
        var firstName = employee.firstName;
        var lastName = employee.lastName
        var isManager = employee.isManager;
        var password = employee.password;

        var sql = "INSERT INTO HclEmployees (employeeID, employeeFirstName, employeeLastName, isManager, password) VALUES (?)";
        var values = [id, firstName, lastName, isManager, password];

        con.query(sql, [values], function (err, result) {
            if (err) console.error(err);
            console.log(result);
        })
    }

    public dbEditEmployee(employee){
        var id = employee.id;
        let thingsToUpdate = [];
        let updateValues = [];
        let sql = "";

        for(var i = 0; i < Object.keys(employee).length; i++){
            switch(true){
                case employee.firstName != null && !thingsToUpdate.includes("employeeFirstName"):
                    thingsToUpdate.push("employeeFirstName")
                    updateValues.push(employee.firstName)
                    break;
                case employee.lastName != null && !thingsToUpdate.includes("employeeLastName"):
                    thingsToUpdate.push("employeeLastName")
                    updateValues.push(employee.lastName)
                    break;
                case employee.isManager != null && !thingsToUpdate.includes("isManager"):
                    thingsToUpdate.push("isManager")
                    updateValues.push(employee.isManager)
                    break;
                case employee.password != null && !thingsToUpdate.includes("password"):
                    thingsToUpdate.push("password")
                    updateValues.push(employee.password)
                    break;
            }
        }

        switch(thingsToUpdate.length){
            case 1:
                sql = "UPDATE HclEmployees SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "' WHERE employeeID = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 2:
                sql = "UPDATE HclEmployees SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "' WHERE employeeID = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 3:
                sql = "UPDATE HclEmployees SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + ", " + thingsToUpdate[2] + " = '" + updateValues[2] + "' WHERE employeeID = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 4:
                sql = "UPDATE HclEmployees SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + ", " + thingsToUpdate[2] + " = '" + updateValues[2] + ", " + thingsToUpdate[3] + " = '" + updateValues[3] + "' WHERE employeeID = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
        }
    }

    public dbDeleteEmployee(id){
        var sql = "DELETE FROM HclEmployees WHERE employeeID = ?";
        con.query(sql, id, function (err, result) {
            if (err) console.error(err);
            console.log("Number of records deleted: " + result.affectedRows);
        });
    }

    public dbAuthenticateEmployee(id): boolean {
        var sql = "SELECT CASE WHEN COUNT(employeeID) = 1 THEN 'TRUE' ELSE 'FALSE' END AS 'Returned Info' FROM HclEmployees WHERE employeeID = ?";
        con.query(sql, id, function (err, result) {
            if (err) console.error(err);
            console.log(result);
        });

        return false; // DO AUTHENTICATION HERE
    }

}

export default EmployeeDAO;