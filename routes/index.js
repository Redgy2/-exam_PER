/*
*Redgy Pérard
*21 mars 2023
*./routes/index.js
*/

const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => {
    reponse.send('utilisez /api/clients pour faire appel au service Web des clients...');
});


module.exports = router;
