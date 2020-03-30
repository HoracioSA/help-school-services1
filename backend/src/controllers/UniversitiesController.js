const crypto=require('crypto')
const connection = require('../database/connection')
module.exports={
    async index (request, response){
        const universities = await connection('universities').select('*');
        return response.json(universities)
    },
    
async create(request, response){
    const {name, email,password, whatsapp, city, uf}  = request.body;
    const id =crypto.randomBytes(4).toString('HEX');
   await connection('universities').insert({
        id,
        name,
        email,
        password,
        whatsapp,
        city,
        uf
    })
return response.json({id})
}
};