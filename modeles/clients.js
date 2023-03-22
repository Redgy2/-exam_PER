/*
*Redgy Pérard
*21 mars 2023
*./modeles/clients.js
*modèle Mongoose pour accéder à la collection clients
*/


const mongoose = require('mongoose');

let schemaClients = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },         
});
let Clients = module.exports = mongoose.model('clients', schemaClients );


//méthode obtenir un client
module.exports.getClients = (callback, limit) => {
    Clients.find(callback).limit(limit);
}

//méthode pour obtenir id client
module.exports.getClientsParChamp = (nomChamp, critere, callback) => {
    const query = {[nomChamp]: RegExp(critere)};
    console.log(query);
    Clients.find(query, callback);
}

// méthode pour ajouter un client à la BD
module.exports.ajoutClient = (client, callback) => {
    client._id = new mongoose.Types.ObjectId();
    console.log(client);
    Clients.create(client, callback);
}

// méthode pour supprimer un client dans la BD
module.exports.supprimerClients = (telClient, callback) => {
    let filtre = { "telephone": telClient};
    Clients.deleteOne(filtre, callback);
};

// méthode pour modifier un client dans la BD
module.exports.modifierClients = (telClient, nouvClient, callback) => {
    let filtre = { "telephone": telClient };
    let options = { };
    let nouveauClient = {
        nom: nouvClient.nom,
        adresse: nouvClient.adresse,
        telephone: nouvClient.telephone,
        date: nouvClient.date
    };
    Clients.findOneAndUpdate(filtre, nouveauClient, options, callback);
};