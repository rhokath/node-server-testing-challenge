const request = require('supertest');
const server = require('./server');


describe('server.js', ()=> {
    describe('GET /', ()=> {
        it('returns 200 ok', ()=> {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
        it("should return { api: 'up' }", async () => {
            const res = await request(server).get('/');
      
            expect(res.body.api).toBe('up');
            expect(res.body).toEqual({ api: 'up' });
          });
          it('returns JSON', done => {
            request(server)
              .get('/')
              .then(res => {
                // assert that we get an http status code 200
                expect(res.type).toMatch(/json/i);
                done();
              });
          });
    })
    describe('POST /', ()=> {
        it('returns 201 ok', () => {
            return request(server)
                .post('/').send({name: 'bob'})
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })
    })
    describe('DELETE /', () => {
        it('returns 200 ok', () => {
            return request(server)
            .delete('/1')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
})