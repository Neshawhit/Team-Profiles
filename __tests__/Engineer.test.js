const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("role", () => {
        it("should return an object containing a 'role' property when called with the 'Engineer' keyword", () => {
            const engineer = new Engineer('engineer');
            expect(engineer.getRole()).toEqual('Engineer');
        })
    });

    describe("name", () => {
        it("should return an object containing a 'name' property when called with the 'name' keyword", () => {
            const engineer = new Engineer('Tom');
            expect(engineer.getName()).toEqual(expect.any(String));
        });
    });
    
    describe("email", () => {
        it("should return an object containing a 'email' property when called with the 'email' keyword", () => {
            const engineer = new Engineer("Tom", "tom@gmail.com");
            expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
        });
    });
    describe("id", () => {
        it("should return an object containing a 'id' property when called with the 'id' keyword", () => {
            const engineer = new Engineer("Tom", "tom@gmail.com", 2);
            expect(engineer.getId()).toEqual(expect.any(Number));
        });
    });
    describe("github", () => {
        it("should return an object containing a 'github' property when called with the 'githun' keyword", () => {
            const engineer = new Engineer("Tom", "tom@gmail.com", 2, "tom@github.com");
            expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
        });
    });
});
