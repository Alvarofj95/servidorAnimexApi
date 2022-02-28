//Rutas para anime
const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController')

// api/anime
router.post('/', animeController.crearAnime);
router.get('/', animeController.recibirAnimes);
router.put('/:id', animeController.actualizarAnime);
router.get('/:id', animeController.recibirAnime);
router.delete('/:id', animeController.eliminarAnime);


module.exports = router;