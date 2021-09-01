"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Routes_1 = require("./Routes");
class TestRoutes extends Routes_1.default {
    initGetRoutes() {
        this._parentApp.get("/hcl/test", (req, res) => {
            res.status(200).json({ responseMessage: "The GET request was successful." });
        });
    }
    initPostRoutes() {
        this._parentApp.post("/hcl/test", (req, res) => {
            let responseMessage = "The POST request was successful with ";
            Object.keys(req.body).includes("message") ? responseMessage += `message: ${req.body.message}` : responseMessage += "an empty or invalid message";
            res.status(200).json({ responseMessage: responseMessage });
        });
    }
    initPutRoutes() {
        this._parentApp.put("/hcl/test", (req, res) => {
            res.status(200).json({ responseMessage: "The PUT request was successful." });
        });
    }
    initDeleteRoutes() {
        this._parentApp.delete("/hcl/test", (req, res) => {
            res.status(200).json({ responseMessage: "The DELETE request was successful." });
        });
    }
}
exports.default = TestRoutes;
