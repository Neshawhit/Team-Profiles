const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("role", () => {
        it("should return an object containing a 'role' property when called with the 'intern' keyword", () => {
            const obj = new intern();
            expect(typeof obj).toEqual('intern');
        })
    });

    describe("name", () => {
        it("should return an object containing a 'name' property when called with the 'name' keyword", () => {
            const obj = new intern();
            expect(typeof obj).toEqual('name');
        });
    });
    
    describe("email", () => {
        it("should return an object containing a 'email' property when called with the 'email' keyword", () => {
            const obj = new intern();
            expect(typeof obj).toEqual('email');
        });
    });
    describe("id", () => {
        it("should return an object containing a 'id' property when called with the 'id' keyword", () => {
            const obj = new intern();
            expect(typeof obj).toEqual('id');
        });
    });
    describe("school", () => {
        it("should return an object containing a 'school' property when called with the 'school' keyword", () => {
            const obj = new intern();
            expect(typeof obj).toEqual('school');
        });
    });
});
