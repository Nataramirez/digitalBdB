const express = require('express');
const router = express.Router();
const { Person, Relationship } = require('../db.js');

// create new person
router.post('/', async function (req, res) {
    try {
        let { name, lastName, birth, nameRelationship } = req.body;

        const newPerson = await Person.create({
            name,
            lastName,
            birth
        });

        /*
        if(nameRelationship){
            await newPerson.addRelationship(nameRelationship);

        }
        */

       return res.json(newPerson);

    } catch (error) {
        res.send(error);
    }


})
/*
router.post('/', async function(req, res){
    try {
        let { name, lastName, birth, nameRelationship } = req.body;

        const [ 
            createPerson, 
            createRelationship, 
        ] = Promise.all([
            Person.create({
                name,
                lastName,
                birth
            },
            {
                fields: [
                    "name",
                    "lastName",
                    "birth"
                ]
            }),
            Relationship.create({
                nameRelationship
            },
            {
                fields: [ "nameRelationship" ], 
            })
        ]);

        await createPerson.setRelationship(createRelationship);

        let newObject = {
            ...createPerson.dataValues,
            ...createRelationship.dataValues,
        };
        
        res.send().json(newObject);

    } catch (error) {
        res.send(error);
    }
    
      
})
*/
router.get('/', async function (req, res) {
    const peopleList = await Person.findAll();

    res.send(peopleList);
})

module.exports = router;