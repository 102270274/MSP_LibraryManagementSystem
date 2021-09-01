import { Request, Response } from "express"; // Express Types
import Routes from "./Routes";

class TestRoutes extends Routes {
 
    initGetRoutes(): void{
        this._parentApp.get("/hcl/test", (req: Request, res: Response) => {
            res.status(200).json({ responseMessage: "The GET request was successful." });
        })
    }

    initPostRoutes(): void{
        this._parentApp.post("/hcl/test", (req: Request, res: Response) => {
            let responseMessage: string = "The POST request was successful with ";
            Object.keys(req.body).includes("message") ? responseMessage += `message: ${req.body.message}` : responseMessage += "an empty or invalid message";
            res.status(200).json({ responseMessage: responseMessage});
        })
    }

    initPutRoutes(): void{
        this._parentApp.put("/hcl/test", (req: Request, res: Response) => {
            res.status(200).json({ responseMessage: "The PUT request was successful." });
        })
    }

    initDeleteRoutes(): void{
        this._parentApp.delete("/hcl/test", (req: Request, res: Response) => {
            res.status(200).json({ responseMessage: "The DELETE request was successful." });
        })
    }
    
}

export default TestRoutes;