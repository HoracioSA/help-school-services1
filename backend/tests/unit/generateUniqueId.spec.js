const generateUniqueId= require('../../src/utils/generateUniqueId')
describe('Generate a Unique ID',()=>{
    it('It should generate an unique ID',()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
})
