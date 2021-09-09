import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js'
import faker from 'faker';
import assert from 'assert';

const expect = chai.expect;
const should = chai.should();
const hostname = process.env.HOSTNAME

chai.use(chaiHttp);


//defining hooks
after(function(){
    process.exit(0);
    assert.ok(true);
})


//Unit test case for user login

const mockUser = {username: process.env.TEST_EMAIL, password: process.env.TEST_PWD}

describe('Nodejs login user  Test', () => {
    describe("Login User", () => { 
        it('It should verify the user and respond back with user details.', (done) => {
            chai.request(hostname)
            .post('/user/login')
            .set('content-type', 'application/json')
            .send(mockUser)
            .end((err, res) => {
                should.not.exist(err);
                expect(err).to.be.null;
                expect(res).to.be.json;
                expect (res.body).to.be.a("Object");
                expect(res.body).to.have.nested.property('user.username').to.be.a('string');
                expect(res.body).to.have.nested.property('user.firstname').to.be.a('string');
                expect(res.body).to.have.nested.property('user.lastname').to.be.a('string');
                expect(res.body).to.have.nested.property('user.email').to.be.a('email');
                should.exist (res.body);
                expect(res.status).to.equal (200);
                done();
            });
        });
    });
});


// Unit test case for fetch all users

describe('Nodejs fetch all user  Test', () => {
    describe("fetch all User", () => { 
        it('It should fetch all user details.', (done) => {
            chai.request(hostname)
            .get('/user/fetchall')
            .end((err, res) => {
                should.not.exist(err);
                expect(err).to.be.null;
                expect(res).to.be.json;
                expect (res.body).to.be.a("array");
                should.exist (res.body);
                expect(res.status).to.equal (200);
                done();
            });
        });
    });
});


//Unit test case for fetch user by id

describe('Nodejs fetch  user by id Test', () => {
    describe("fetch User by id", () => { 
        it('It should the user by its id.', (done) => {
            chai.request(hostname)
            .post('/user/'+process.env.TEST_USERID)
            .end((err, res) => {
                should.not.exist(err);
                expect(err).to.be.null;
                expect(res).to.be.json;
                expect (res.body).to.be.a("Object");
                expect(res.body).to.have.property('email').to.be.a('string');
                expect(res.body).to.have.property('role').to.be.a('string');
                expect(res.body).to.have.property('name').to.be.a('string');
                should.exist (res.body);
                expect(res.status).to.equal (200);
                done();
            });
        });
    });
});

