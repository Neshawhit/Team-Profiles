const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("role", () => {
        it("should return an object containing a 'role' property when called with the 'employee' keyword", () => {
            const employee = new Employee("engineer");
            expect(employee.getRole()).toEqual("employee");
           
            //expect(typeof obj).toEqual('employee');
        })
    });

    describe("name", () => {
        it("should return an object containing a 'name' property when called with the 'name' keyword", () => {
            const employee = new Employee("ty");
            expect(employee.getName()).toEqual(expect.any(String));
            //expect(typeof obj).toEqual('name');
        });
    });
    
    describe("email", () => {
        it("should return an object containing a 'email' property when called with the 'email' keyword", () => {
            const employee = new Employee("ty", "ty@gmail.com");
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
            // expect(typeof obj).toEqual('email');
        });
    });
    describe("id", () => {
        it("should return an object containing a 'id' property when called with the 'id' keyword", () => {
            const employee = new Employee("ty", "ty@gmail.com", 1);
            expect(employee.getId()).toEqual(expect.any(Number));

            //expect(typeof obj).toEqual('id');
        });
    });
    describe("employee", () => {
        it("should return an object containing a 'employee' property when called with the 'employee' keyword", () => {
            const employee = new Employee("ty", "ty@gmail.com", 1);
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));

            //expect(typeof obj).toEqual('id');
        });
    });
});
    
