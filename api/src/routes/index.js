const Router = require("express");
const route = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const peopleRoute = require('./person.js');
const relationshipRoute = require('./relationship.js');

route.use('/person', peopleRoute);
route.use('/relationship', relationshipRoute);

module.exports = route;
