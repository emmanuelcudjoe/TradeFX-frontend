// import { validateEmail } from "./validators";
const {describe, expect, test} = require("@jest/globals");

const {validateEmail} = require("./validators")

const mockEmailValidator = jest.fn(validateEmail);

describe("Test various emails", () => {

    test("Test an invalid email", () => {
        expect(mockEmailValidator.call("test!mail.com")).toBe(false)
    })
})