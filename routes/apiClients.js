const express = require('express');
const router = express.Router();

const Clients = require('../modeles/clients');

router.get('/', (requete, reponse) => {
    Clients.getClients((err, client)=>{
        if (err) throw err;
        reponse.json(client);
    }, 250);
});

router.get('/:id', (requete, reponse) => {
    Clients.getClientsParChamp("telephone", requete.params.id, (err, client)=>{
        if (err) throw err;
        reponse.json(client);
    });
});

router.get('/nom/:texte', (requete, reponse) => {
    Clients.getClientsParChamp("nom", requete.params.texte, (err, client)=>{
        if (err) throw err;
        reponse.json(client);
    },250);
});

router.get('/adresse/:texte', (requete, reponse) => {
    Clients.getClientsParChamp("adresse", requete.params.texte, (err, client)=>{
        if (err) throw err;
        reponse.json(client);
    },250);
});

router.get('/telephone/:texte', (requete, reponse) => {
    Clients.getClientsParChamp("telephone", requete.params.texte, (err, client)=>{
        if (err) throw err;
        reponse.json(client);
    },250);
});

router.get('/date/:texte', (requete, reponse) => {
    Clients.getClientsParChamp("date", requete.params.texte, (err, client)=>{
        if (err) throw err;
        reponse.json(client);
    },250);
});


router.delete('/:id', (requete, reponse)=>{
    Clients.supprimerClients(requete.params.id, (err, client) => {
        if (err) throw err;
        reponse.json(client);
    });
});

router.post('/', (requete, reponse) => {
    let cli = requete.body;
    Clients.ajoutClient( cli, (err, retourclient)=>{
        if (err) throw err;
        reponse.json(retourclient);
    });
});

router.put('/:id', (requete, reponse)=>{
    let nouveauClient = requete.body;
    Clients.modifierClients(requete.params.id, nouveauClient, (err, resultat) => {
        if (err) throw err;
        reponse.json(resultat);
    });
});

module.exports = router;

