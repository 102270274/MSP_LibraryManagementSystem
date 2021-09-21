/* 
    Title: MemberDAO
    Description: The data access object for all Member related functions in the REST API.
    Author: Matt Dixon
    Last Modified: 15/09/21
*/

import DAO from "./DAO";
import Member from "../utils/MemberType";

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

class MemberDAO extends DAO {

    dbGetAllMembers(){

        con.query("SELECT * FROM HclMembers", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    }

    dbGetMembersByParameters(parameters){
        var id = "%%";    
        var firstName = "%%";
        var lastName = "%%";
        var gender = "%%";
        var dob = "%%";
        var phoneNumber = "%%";
        var email = "%%";
        var address = "%%";

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
                case parameters.gender != null && gender == "%%":
                    gender = parameters.gender;
                    break;
                case parameters.dob != null && dob == "%%":
                    dob = parameters.dob;
                    break;
                case parameters.phoneNumber != null && phoneNumber == "%%":
                    phoneNumber = parameters.phoneNumber;
                    break;
                case parameters.email != null && email == "%%":
                    email = parameters.email;
                    break;
                case parameters.address != null && address == "%%":
                    address = parameters.address;
                    break;
            }
        }

        var sql = `SELECT * FROM HclMembers WHERE memberID LIKE '${id}' AND memberFirstName LIKE '${firstName}' AND memberLastName LIKE '${lastName}' AND gender LIKE '${gender}' AND birthDate LIKE '${dob}' AND phoneNo LIKE '${phoneNumber}' AND email LIKE '${email}' AND address LIKE '${address}'`;
        
        con.query(sql, function (err, result) {
            if (err) console.error(err);
            console.log(result);
            console.log(sql);
        });
    }

    dbAddMember(member){
        var id = id;
        var firstName = firstName;
        var lastName = lastName;
        var gender = gender;
        var dob = dob;
        var phoneNumber = phoneNumber;
        var email = email;
        var address = address;

        var sql = "INSERT INTO HclMembers (memberID, memberFirstName, memberLastName, gender, birthDate, phoneNo, email, address) VALUES (?)";
        var values = [id, firstName, lastName, gender, dob, phoneNumber, email, address]
        
        con.query(sql, [values], function (err, result) {
            if (err) console.error(err);
            console.log(result);
        })
    }

    dbEditMember(member){
        let thingsToUpdate = [];
        let updateValues = [];
        let sql = "";
        var id = member.id

        for(var i = 0; i < Object.keys(member).length; i++){
            switch(true){
                case member.firstName != null && !thingsToUpdate.includes("memberFirstName"):
                    thingsToUpdate.push("memberFirstName")
                    updateValues.push(member.firstName)
                    break;
                case member.lastName != null && !thingsToUpdate.includes("memberLastName"):
                    thingsToUpdate.push("memberLastName")
                    updateValues.push(member.lastName)
                    break;
                case member.gender != null && !thingsToUpdate.includes("gender"):
                    thingsToUpdate.push("gender")
                    updateValues.push(member.gender)
                    break;
                case member.dob != null && !thingsToUpdate.includes("dob"):
                    thingsToUpdate.push("dob")
                    updateValues.push(member.dob)
                    break;
                case member.phoneNumber != null && !thingsToUpdate.includes("phoneNo"):
                    thingsToUpdate.push("phoneNo")
                    updateValues.push(member.phoneNumber)
                    break;
                case member.email != null && !thingsToUpdate.includes("email"):
                    thingsToUpdate.push("email")
                    updateValues.push(member.email)
                    break;
                case member.address != null && !thingsToUpdate.includes("address"):
                    thingsToUpdate.push("address")
                    updateValues.push(member.address)
                    break;
            }
        }

        switch(thingsToUpdate.length){
            case 1:
                sql = "UPDATE HclMembers SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "' WHERE id = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 2:
                sql = "UPDATE HclMembers SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "' WHERE id = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 3:
                sql = "UPDATE HclMembers SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + "' WHERE id = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 4:
                sql = "UPDATE HclMembers SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + ", " + thingsToUpdate[3] + " = '" + updateValues[3] + "' WHERE id = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 5:
                sql = "UPDATE HclMembers SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + ", " + thingsToUpdate[3] + " = '" + updateValues[3] + "', " + thingsToUpdate[4] + " = '" + updateValues[4] + "' WHERE id = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 6:
                sql = "UPDATE HclMembers SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + ", " + thingsToUpdate[3] + " = '" + updateValues[3] + "', " + thingsToUpdate[4] + " = '" + updateValues[4] + "', " + thingsToUpdate[5] + " = '" + updateValues[5] + "' WHERE id = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
            case 7:
                sql = "UPDATE HclMembers SET " + thingsToUpdate[0] + " = '" + updateValues[0] + "', " + thingsToUpdate[1] + " = '" + updateValues[1] + "', " + thingsToUpdate[2] + " = '" + updateValues[2] + ", " + thingsToUpdate[3] + " = '" + updateValues[3] + "', " + thingsToUpdate[4] + " = '" + updateValues[4] + "', " + thingsToUpdate[5] + " = '" + updateValues[5] + "', " + thingsToUpdate[6] + " = '" + updateValues[6] + "' WHERE id = " + id;
                con.query(sql, function (err, result) {
                    if (err) console.error(err);
                    console.log(result);
                });
                break;
        }
    }

    dbDeleteMember(id: number){
        var sql = "DELETE FROM HclMembers WHERE memberID = ?";
        con.query(sql, id, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
    }

}

export default MemberDAO;