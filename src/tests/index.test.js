const subject = require("../index.js");
const chai = require("chai");
const expect = chai.expect;


describe("index.js", () => {

    it("Can add numbers.", () => {

        var sum = subject.add(1,2);
        expect(sum).to.equal(3);

    })

    it("can log without throwing a message", () => {
        expect(subject.log).to.not.throw();
    })



})


