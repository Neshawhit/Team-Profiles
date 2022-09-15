const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("role", () => {
        it("should return an object containing a 'role' property when called with the 'Manager' keyword", () => {
            const obj = new Manager();
            expect(typeof obj).toEqual('Manager');
        })
    });

    describe("name", () => {
        it("should return an object containing a 'name' property when called with the 'name' keyword", () => {
            const obj = new Manager();
            expect(typeof obj).toEqual('name');
        });
    });
    
    describe("email", () => {
        it("should return an object containing a 'email' property when called with the 'email' keyword", () => {
            const obj = new Manager();
            expect(typeof obj).toEqual('email');
        });
    });
    describe("id", () => {
        it("should return an object containing a 'id' property when called with the 'id' keyword", () => {
            const obj = new Manager();
            expect(typeof obj).toEqual('id');
        });
    });
    describe("officeNumber", () => {
        it("should return an object containing a 'officeNumber' property when called with the 'officeNumber' keyword", () => {
            const obj = new Manager();
            expect(typeof obj).toEqual('officeNumber');
        });
    });
});

