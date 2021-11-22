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

       return res.json(newPerson);

    } catch (error) {
        res.send(error);
    }


})

// llamar a todos las personas creadas
router.get('/', async function (req, res) {
    const peopleList = await Person.findAll();

    res.send(peopleList);
})

// busqueda por id
router.get('/:id', async function (req, res) {
    const { id } = req.params;

    try {
        const responseDb = await Person.findAll({
            where: { id: id },
        })

        responseDb.length > 0 ? res.send(responseDb) : res.send('persona no encontrada')

    } catch (error) {
        res.send(error)
    }
})


module.exports = router;