const connection = require('../database/connection')

module.exports={
    async index(request, response){
    const universities_id = request.headers.authorization;
    const incidents = await connection('incidents')
    .where('universities_id', universities_id).select('*')
        return response.json(incidents);
    }
}