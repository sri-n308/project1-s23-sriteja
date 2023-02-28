import axios from 'axios';


export default async function poke(req, res) {
    try {
        const name = req.query.name
        const request = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/` + name);
        const url = request.data.evolution_chain.url;
        const requestChain = await axios.get(url);
        var chain = requestChain.data.chain;

        let currentStage = "";
        if (chain.evolves_to.length === 0) {
        currentStage = chain.species.name;
        } else {
        currentStage = chain.species.name;
        while (chain.evolves_to.length > 0) {
            currentStage = chain.evolves_to[0].species.name;
            chain = chain.evolves_to[0];
        }
        }
        const data = {evolution: currentStage};
        return res.json(data)
    } catch(error){
        return res.send("error")
    }

}