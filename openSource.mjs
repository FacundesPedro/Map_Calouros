import {resolve} from 'path';
import MapCalouros  from './mapcalouros.mjs'

const path = resolve('calouros.json') //"DB"
export const calouro = { //Adjust the calouro-object to add on .json file
    name:'',
    level:0,
    race:'',
}
const mapCalouros = new MapCalouros(calouro,path) 

// const calouros_dataType = new MapCalouros('Marcelo Hilário',path);
// const selectedCalouro = calouros_dataType.getCalourobyName('Pedro Facundes')