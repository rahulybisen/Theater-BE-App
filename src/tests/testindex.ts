var chaii = require('chai');
const fs = require("fs");
var path = require('path');
var chaiHttp = require('chai-http');
import { appServer } from '../server'
const { expect } = chaii;
require('dotenv').config()
chaii.use(chaiHttp);
const url = `http://localhost:8808/`;
const request = require('supertest')(url);

// un authorized access Test case
describe('GraphQL', () => {
    it('Returns error for un authorized.', (done) => {
        appServer
        request.post('/tiket')
            .send({ query: '{ ticket(where:{id:"cksx4534x00006wr0f2nirwmq"}) { id customerName performanceTitle performanceTime ticketPrice isActive createdAt } }' })
            .expect(200)
            .end((err, res) => {
                console.log(err)
                if (err) return done(err);
                done();
            })
    })
})


//Get single Ticket by Id
describe('GraphQL', () => {
    it('Returns tiket with id = cksx4534x00006wr0f2nirwmq', (done) => {
        appServer
        request.post('/tiket')
            .set('Authorization', 'Bearer e5449b53-532e-4241-8389-9aafd8de6caf')
            .send({ query: '{ ticket(where:{id:"cksx4534x00006wr0f2nirwmq"}) { id customerName performanceTitle performanceTime ticketPrice isActive createdAt } }' })
            .expect(200)
            .end((err, res) => {
                console.log(res.body.data)
                if (err) return done(err);
                expect(res.body.data.ticket.id).to.equal('cksx4534x00006wr0f2nirwmq');
                expect(res.body.data.ticket.customerName).to.equal('Sandip');
                expect(res.body.data.ticket.performanceTitle).to.equal('PK movie');
                expect(res.body.data.ticket.performanceTime).to.equal('02:00:00 PM');
                expect(res.body.data.ticket.ticketPrice).to.equal(120);
                expect(res.body.data.ticket.isActive).to.equal(true);
                expect(res.body.data.ticket.createdAt).to.equal('2021-08-29T11:12:05.535Z');
                done();
            })
    })
})

// Mutation test case to update record
describe('GraphQL', () => {
    it('Returns tiket with id = cksx4534x00006wr0f2nirwmq', (done) => {
        appServer
        request.post('/tiket')
            .set('Authorization', 'Bearer e5449b53-532e-4241-8389-9aafd8de6caf')
            .send({ query: 'mutation { updateTicket( data:{customerName:"Ajay"} where:{id:"cksx45w6d00236wr08vzx5t4e"}) { id customerName performanceTitle performanceTime ticketPrice isActive createdAt} }' })
            .expect(200)
            .end((err, res) => {
                console.log(res.body.data)
                if (err) return done(err);
                expect(res.body.data.updateTicket.id).to.equal('cksx45w6d00236wr08vzx5t4e');
                expect(res.body.data.updateTicket.customerName).to.equal('Ajay');
                expect(res.body.data.updateTicket.performanceTitle).to.equal('Uri movie');
                expect(res.body.data.updateTicket.performanceTime).to.equal('02:00:00 PM');
                expect(res.body.data.updateTicket.ticketPrice).to.equal(120);
                expect(res.body.data.updateTicket.createdAt).to.equal('2021-08-29T11:12:44.571Z');
                done();
            })
    })
})