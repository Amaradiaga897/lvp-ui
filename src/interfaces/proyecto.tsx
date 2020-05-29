import {IZona} from "./zona"
import {IInterventor} from "./interventor"

export interface IProyecto{
    _id: string;
    zona: IZona;
    interventor: IInterventor;
}