const { number } = require("yargs");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("role", () => {
        it("should return an object containing a 'role' property when called with the 'Manager' keyword", () => {
            const manager = new Manager("manager");
            expect(manager.getRole()).toEqual('Manager');
        })
    });


    describe("name", () => {
        it("should return an object containing a 'name' property when called with the 'name' keyword", () => {
            const manager = new Manager('Josh');
            expect(manager.getName()).toEqual(expect.any(String));
        });
    });

    describe("email", () => {
        it("should return an object containing a 'email' property when called with the 'email' keyword", () => {
            const manager = new Manager('Josh', 'josh@gmail.com')
            expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
            // expect(typeof obj).toEqual('email');
        });
    });
    
    describe("id", () => {
        it("should return an object containing a 'id' property when called with the 'id' keyword", () => {
            const manager = new Manager("Josh", "josh@gmail.com", 5);
            expect(manager.getId()).toEqual(expect.any(Number));

            //expect(typeof obj).toEqual('id');
        });
    });


    describe("officeNumber", () => {
        it("should return an object containing a 'officeNumber' property when called with the 'officeNumber' keyword", () => {
            const manager = new Manager('Josh', 'josh@gmail.com', 4, 123);
            expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
        });
    });
});

