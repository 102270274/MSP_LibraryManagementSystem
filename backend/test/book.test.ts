import { test, expect, describe } from "@jest/globals";

// BookServices.ts
import BookServices from "../src/services/BookServices";
const bookServices: BookServices = new BookServices();

describe("Check Query Parameters Exist", () => {

    test("Inputted query parameters do not exist", () => {
        expect(bookServices.checkForQueryParameters({})).toBe(false);
    })

    test("Inputted query parameters do exist", () => {
        expect(bookServices.checkForQueryParameters({isbn: "3eCz4lo"})).toBe(true);
    })

})

describe("Query Validation", () => {

    test("Inputted query parameters does not match valid query parameters", () => {
        expect(bookServices.validateQueryParameters({mumbo: "jumbo"}, bookServices.validQueryParameters)).toBe(false);
    })
    
    test("Inputted query parameters matches valid query parameters", () => {
        expect(bookServices.validateQueryParameters({title: "The Great Gatsby"}, bookServices.validQueryParameters)).toBe(true);
    })

})



