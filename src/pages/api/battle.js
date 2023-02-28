import axios from 'axios';

export default async function handler(req, res) {
    try {
        const poke1 = req.body.pokemon1
        const poke2 = req.body.pokemon2

        const response1 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + poke1)
        const baseStat1 = response1.data.stats[0].base_stat

        const response2 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + poke2)
        const baseStat2 = response2.data.stats[0].base_stat

        if (baseStat1 > baseStat2) {
            const data = {winner : poke1}
            return res.json(data)
        } else {
            const data = {winner : poke2}
            return res.json(data)
        }
    
    } catch(error){
        return res.send("error")
    }

}