const People = require('./peopleModel.js');
const db = require('../data/dbConfig.js');

describe('people model', () => {
  beforeEach(async () => {
    await db('people').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('insert()', () => {
    it('should insert people into the db', async () => {
      // insert a record
      await People.insert({ name: 'Gaffer' });
      await People.insert({ name: 'Frodo' });

      let people = await db('people');

      // assert the record was inserted
      expect(people).toHaveLength(2);
    });

    it('should insert people into the db', async () => {
      // insert a record
      const [id] = await People.insert({ name: 'Gaffer' });

      let people = await db('people')
        .where({ id })
        .first();

      // assert the record was inserted
      expect(people.name).toBe('Gaffer');
    });
  });
  describe('remove()', ()=>{
      it('it should remove people from the db', async() =>{
        const [id] = await People.insert({ name: 'Gaffer' });
        const [other_id] = await People.insert({ name: 'Bob' });
          await People.remove(id)
          let people = await db('people')
        
          expect(people).toHaveLength(1)
      })
  })
});
