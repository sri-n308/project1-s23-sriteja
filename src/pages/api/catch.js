import axios from 'axios';

export default async function handler(req, res) {
    try {
        const N = Math.floor(Math.random() * 255) + 1;
        const BALL = Math.floor(Math.random() * 255) + 1;
        const name = req.body.pokemon
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
     
        const level = 100;
        const IV = 31;
        const EV = 252;

        const baseStat = response.data.stats[0].base_stat
        const maxHP = Math.floor(0.01 * (2 * baseStat + IV + Math.floor(EV * 0.25)) * level) + level + 10;

        const currHP = Math.floor(Math.random() * maxHP) + 1;

        const f = (maxHP * 255 * 4) / (currHP * BALL)

        if (f >= N) {
            const data = {caught : true}
            return res.json(data)
        } else {
            const data = {caught : false} 
            return res.json(data)
        }

    } catch(error){
        return res.send("error")
    }

}