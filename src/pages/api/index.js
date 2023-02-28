import axios from 'axios';

export default async function handler(req, res) {
    try {
        const ind = Math.floor(1 + Math.random() * 1008)
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + ind)
        const name = response.data.name
        const sprite = response.data.sprites.front_default;
        const type = response.data.types.map(type => type.type.name)
        const data = {name: name, sprite: sprite, types: type};
        return res.json(data)
    } catch(error){
        return res.send("error")
    }

}