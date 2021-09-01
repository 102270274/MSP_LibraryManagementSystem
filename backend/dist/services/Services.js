"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Services {
    checkForQueryParameters(parameters) {
        let paramKeys = Object.keys(parameters);
        if (paramKeys.length > 0) {
            return true;
        }
        return false;
    }
    validateQueryParameters(parameters, validParams) {
        let paramKeys = Object.keys(parameters);
        let paramsValid = false;
        paramKeys.forEach(param => {
            if (validParams.includes(param))
                paramsValid = true;
        });
        return paramsValid;
    }
    createResponseData(successStatus, responseMessage, data = [{}]) {
        return { success: successStatus, message: responseMessage, data: data };
    }
}
exports.default = Services;
