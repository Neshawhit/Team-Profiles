const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("role", () => {
        it("should return an object containing a 'role' property when called with the 'Engineer' keyword", () => {
            const obj = new Engineer();
            expect(typeof obj).toEqual('engineer');
        })
    });

    describe("name", () => {
        it("should return an object containing a 'name' property when called with the 'name' keyword", () => {
            const obj = new Engineer();
            expect(typeof obj).toEqual('name');
        });
    });
    
    describe("email", () => {
        it("should return an object containing a 'email' property when called with the 'email' keyword", () => {
            const obj = new Engineer();
            expect(typeof obj).toEqual('email');
        });
    });
    describe("id", () => {
        it("should return an object containing a 'id' property when called with the 'id' keyword", () => {
            const obj = new Engineer();
            expect(typeof obj).toEqual('id');
        });
    });
    describe("github", () => {
        it("should return an object containing a 'github' property when called with the 'githun' keyword", () => {
            const obj = new Engineer();
            expect(typeof obj).toEqual('github');
        });
    });
});
