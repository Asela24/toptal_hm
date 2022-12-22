import { DirectionType, TypeForSearchInput } from "./types";

const sortFunction = (dir: DirectionType , a: TypeForSearchInput, b: TypeForSearchInput ): number =>  {

    if (dir === 'asc') {
        return a < b ? -1 : 1;
        
    } else  {
        return a  > b ? -1 : 1
    }
}

export {sortFunction}