import {readFileSync, writeFileSync} from 'fs'

export default class MapCalouros{
    constructor({name,level,race},uri){
        const chunk = this.getChunkjsonFile(uri)
        
        this.calouros = JSON.parse(chunk)
        this.calouro = {name:name,level:level,race:race}
        this.calouros.push(this.calouro)
        
        this.postChunkjsonFile(uri,JSON.stringify(this.calouros))
    }
    getChunkjsonFile = (uri) => readFileSync(uri)

    postChunkjsonFile = (uri,parsedJSON) => writeFileSync(uri,parsedJSON)

    getCalouros = () => console.log(JSON.stringify(this.calouros))

    getCalourobyName = (name) => this.calouros.filter(calouro => calouro.name == name)[0] 

}