const connection = require('../database/connection')

module.exports={
    async create(request, response){
        const {id} = request.body;
        const University = await connection('universities')
        .where('id', id)
        .select('name')
        .first();
        if (!University) {
            return response.status(400).json({error:"No University found with thisd ID"})
            
        }return response.json(University)
    }
    
}