const connection = require('../database/connection')
module.exports ={
    async index(request, response){
        const {page =1}=request.query;
        const [count] = await connection('incidents').count()
        
        const incidents= await connection('incidents')
        .join('universities','universities.id', '=', 'incidents.universities_id' )
        .limit(5)
        .offset((page -1)*5)
        .select([
            'incidents.*',
            'universities.name',
            'universities.email',
            'universities.whatsapp',
            'universities.city',
            'universities.uf'
        ]);
        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents)
    },
    async create(request, response){
        const {title, description, value}=request.body;
        const universities_id = request.headers.authorization;
        const [id]= await connection('incidents').insert({
            title,
            description,
            value,
            universities_id
        })
        return response.json({id});
    },
    async delete(request, response){
        const {id} =request.params;
        const universities_id = request.headers.authorization;
        const incident = await connection('incidents')
        .where('id', id)
        .select('universities_id')
        .first();

        if (incident.universities_id != universities_id) {
            return response.status(401).json({error: 'Operation is not permited!'
            })
            
        }
        await connection('incidents').where('id', id).delete();
        return  response.status(204).send();
    }

};