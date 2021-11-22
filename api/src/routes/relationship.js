const { Relationship } = require('../db');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const relationship = [ "mother", "father", "none"]
       
       const dbRelationship = await Promise.all(
           relationship.map(e => Relationship.findOrCreate({
               where: {
                   name: e
               }
           }))
       )
        res.json(dbRelationship)

        
    } catch (error) {
        res.send(error)
        
    }
})

module.exports = router