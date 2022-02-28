//Rutas para anime
const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController')

// api/anime
router.post('/addAnime', animeController.crearAnime);
router.get('/animes', animeController.recibirAnimes);
router.put('/updateAnime/:id', animeController.actualizarAnime);
router.get('/animes/:id', animeController.recibirAnime);
router.delete('/deleteAnime/:id', animeController.eliminarAnime);


module.exports = router;