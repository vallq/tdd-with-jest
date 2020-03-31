const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
    it("should return 1 when input is 1", () => {
        expect(fizzBuzz(1)).toBe(1);
    });

    it("should return 2 when the input is 2", () => {
        expect(fizzBuzz(2)).toBe(2);
    });

    it("should return Fizz when the input is 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it("should return Fizz when input is a multiple of 3", () => {
        expect(fizzBuzz(6)).toBe("Fizz");
    });

    it("should return Buzz when the input is 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    it("should return Buzz when input is a multiple of 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });

    it("should return FizzBuzz when input is 15", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    it("should return FizzBuzz when input is a multiple of 15", () => {
        expect(fizzBuzz(30)).toBe("FizzBuzz");
    });

    it("should return 0 when input is 0", () => {
        expect(fizzBuzz(0)).toBe(0);
    });

});