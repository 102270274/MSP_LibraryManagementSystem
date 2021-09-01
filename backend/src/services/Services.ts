import { Request } from "express";
import ResponseData from "../utils/ResponseDataType";

class Services {

    public checkForQueryParameters(parameters: Request.query): boolean {
        // Check if request contains query parameters
        let paramKeys: Array<string> = Object.keys(parameters);

        if(paramKeys.length > 0){
            return true;
        }

        return false;
    }

    public validateQueryParameters(parameters: Request.query, validParams: Array<string>): boolean{
        // Ensure query parameters match a valid descriptor of the object
        let paramKeys: Array<string> = Object.keys(parameters);
        let paramsValid: boolean = false;

        paramKeys.forEach(param => {
            if(validParams.includes(param)) paramsValid = true;
        })

        return paramsValid;
    }

    public createResponseData(successStatus: boolean, responseMessage: string, data: Array<Object> = [{}]): ResponseData {
        // Create the response object that is sent back to the client
        return { success: successStatus, message: responseMessage, data: data};
    }

}

export default Services;