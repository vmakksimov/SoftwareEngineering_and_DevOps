const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;
chai.use(chaiHttp);

describe("Books API Tests", () => {
    it("should POST a book", (done) => {
        const reqBody = {id: "1", title: "DevOps Magic 2", author: "Pesho"};
        chai.request(server)
            .post("/books")
            .send(reqBody)
            .end((err, resp) => {
                if (err) {
                    return done(err)
                }
                expect(resp.statusCode, "Status Code").to.be.equal(201);
                expect(resp.body).to.be.a("object");
                expect(resp.body.id).to.be.equal(reqBody.id);
                expect(resp.body.id).to.exist;
                expect(resp.body).to.have.property("id");
                expect(resp.body.title, "Title property").to.be.equal(reqBody.title);
                expect(resp.body.author).to.be.equal(reqBody.author);
                done();
            });
    });

    it("should GET all books", (done) => {
        chai.request(server)
            .get("/books")
            .end((err, resp) => {
                if (err) {
                    return done(err);
                }
                expect(resp.statusCode, "Status code ").to.equal(200);
                expect(resp, "Status code ").to.have.status(200);
                expect(resp.body).to.be.a("array");
                done();
            });
    });

    it("should GET a single book", (done) => {
        const bookId = 1;
        chai.request(server)
            .get(`/books/${bookId}`)
            .end((err, resp) => {
                if (err) {
                    return done(err);
                }
                expect(resp.statusCode, "Status code ").to.equal(200);
                expect(resp, "Status code ").to.have.status(200);
                expect(resp.body).to.be.a("object");
                expect(resp.body).to.have.property("id");
                expect(resp.body).to.have.property("title");
                expect(resp.body, "Author property").to.have.property("author");
                expect(resp.body.author, "Author property").to.exist;
                done();
            });
    });

    it("should Update a book", (done) => {
        const reqBody = {id: "1", title: "DevOps Magic 2 Updated", author: "Pesho"};
        chai.request(server)
            //.put(`/books/${reqBody.id}`)
            .put(`/books/1`)
            .send(reqBody)
            .end((err, resp) => {
                if (err) {
                    return done(err)
                }
                expect(resp.statusCode, "Status Code").to.be.equal(200);
                expect(resp.body).to.be.a("object");
                expect(resp.body.id).to.be.equal(reqBody.id);
                expect(resp.body.id).to.exist;
                expect(resp.body).to.have.property("id");
                expect(resp.body.title, "Title property").to.be.equal(reqBody.title);
                expect(resp.body.author).to.be.equal(reqBody.author);
                done();
            });
    });
});