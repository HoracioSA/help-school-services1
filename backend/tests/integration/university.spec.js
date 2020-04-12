const supertest = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('University',()=>{
    beforeEach(async()=>{
       await connection.migrate.rollback();

       await connection.migrate.latest();
    });
    afterAll(async()=>{
       await connection.destroy();
    })
    it('It should be able bto create a new Entity',async()=>{
        const response = await supertest(app)
        .post('/universities')
        .send({
            name:"NMeTaU",
	        email: "florenciomiguell@gmail.com",
	        password:123456,
	        whatsapp:"380636413754",
	        city: "Dnepro",
	        uf:"DN"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})