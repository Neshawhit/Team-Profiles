const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("role", () => {
        it("should return an object containing a 'role' property when called with the 'intern' keyword", () => {
            const intern = new Intern('intern');
            expect(intern.getRole()).toEqual('Intern');
        })
    });

    describe("name", () => {
        it("should return an object containing a 'name' property when called with the 'name' keyword", () => {
            const intern = new Intern('Jessica');
            expect(intern.getName()).toEqual(expect.any(String));
        });
    });
    
    describe("email", () => {
        it("should return an object containing a 'email' property when called with the 'email' keyword", () => {
            const intern = new Intern("Jessica", "jessica@gmail.com");
            expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
        });
    });

    describe("id", () => {
        it("should return an object containing a 'id' property when called with the 'id' keyword", () => {
            const intern = new Intern('Jessica', 'jessica@gmail.com', 3);
            expect(intern.getId()).toEqual(expect.any(Number));
        });
    });
    describe("school", () => {
        it("should return an object containing a 'school' property when called with the 'school' keyword", () => {
            const intern = new Intern('Jessica', 'jessica@gmail.com', 3, "University of Charlotte");
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });
});
