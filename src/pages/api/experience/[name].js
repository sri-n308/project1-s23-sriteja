import axios from 'axios';


export default async function poke(req, res) {
    try {
        const name = req.query.name
        const getGrowth = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + name)
        const growthLink = getGrowth.data.growth_rate.url
        const response = await axios.get(growthLink)
        const level = req.query.level - 1;
        const xp = response.data.levels[level].experience
        const data = {experience : xp}
        return res.json(data)

    } catch(error){
        return res.send("error")
    }

}
