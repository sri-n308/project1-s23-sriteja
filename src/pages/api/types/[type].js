import axios from 'axios';


export default async function poke(req, res) {
    try {
        const type = req.query.type;
        const response = await axios.get("https://pokeapi.co/api/v2/type/" + type)
        const poke = response.data.pokemon.map(pokemon => pokemon.pokemon.name)
        const data = {pokemon: poke}
        return res.json(data)
    } catch(error){
        return res.send("error")
    }

}