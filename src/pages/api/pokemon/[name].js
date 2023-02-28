import axios from 'axios';


export default async function poke(req, res) {
    try {
        const name = req.query.name;
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
        const sprite = response.data.sprites.front_default;
        const type = response.data.types.map(type => type.type.name)
        const data = {pokemonName: name, sprite: sprite, types: type};
        return res.json(data)
    } catch(error){
        return res.send("error")
    }

}
