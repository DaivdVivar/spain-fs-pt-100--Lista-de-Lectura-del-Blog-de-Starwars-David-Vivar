const ContactService = {}
//---------- Character ----------//
ContactService.getAll = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!resp.ok) throw new Error('Error feching data getAll')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
ContactService.getOne = async id => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
        if (!resp.ok) throw new Error('error fetching data getOne')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
//---------- Tipos ----------//
ContactService.getAllTipos = async () => {
    try {
        const resp1 = await fetch('https://pokeapi.co/api/v2/type');
        if (!resp1.ok) throw new Error('Error feching data getAllType')
        const data = await resp1.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
ContactService.getOneTipos = async id => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/type/'+id);
        if (!resp.ok) throw new Error('error fetching data getOneType')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
//---------- Region ----------//
ContactService.getAllRegion = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/region');
        if (!resp.ok) throw new Error('Error feching data getAllRegion')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
ContactService.getOneRegion = async id => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/region/'+id);
        if (!resp.ok) throw new Error('error fetching data getOneRegion')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
export default ContactService