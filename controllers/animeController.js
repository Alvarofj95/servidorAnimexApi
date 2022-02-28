const Anime = require("../model/Anime")

exports.crearAnime = async (req, res) => {
    
    try {

        let anime;

        //Creamos nuestro anime
        anime = new Anime(req.body);

        await anime.save();
        res.send(anime);

    } catch (err) {
        console.log(err);
        res.status(500).send('PUUUUUM')
    }

}

exports.recibirAnimes = async (req, res) => {

    try {
        const animes = await Anime.find();
        res.json(animes);
    } catch (err) {
        console.log(err);
        res.status(500).send('PUUUUUM')
    }

}

exports.actualizarAnime = async (req, res) => {
    try {
        const { name, gender, season, image } = req.body;
        let anime = await Anime.findById(req.params.id);

        if(!anime) {
            res.status(404).json({ msg: 'Amigo, el anime no existe'})
        }

        anime.name = name;
        anime.gender = gender;
        anime.season = season;
        anime.image = image;

        anime = await Anime.findOneAndUpdate({_id: req.params.id}, anime, { new: true })
        res.json(anime);

    } catch (err) {
        console.log(err);
        res.status(500).send('PUUUUUM')
    }
}

exports.recibirAnime = async (req, res) => {
    try {
        let anime = await Anime.findById(req.params.id);

        if(!anime) {
            res.status(404).json({ msg: 'Amigo, el anime no existe'})
        }
        res.json(anime);

    } catch (err) {
        console.log(err);
        res.status(500).send('PUUUUUM')
    }
}

exports.eliminarAnime = async (req, res) => {
    try {
        let anime = await Anime.findById(req.params.id);

        if(!anime) {
            res.status(404).json({ msg: 'Amigo, el anime no existe'})
        }

        await Anime.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Anime eliminado'});

    } catch (err) {
        console.log(err);
        res.status(500).send('PUUUUUM')
    }
}

