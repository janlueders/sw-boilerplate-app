//const URL = 'https://adminer:6vB7WptFiXufTcc9S6UDmaTfOLpZFOqKrQKTfbkq@shopware.smartpage.cc'
import { encode } from 'base-64'

const URL = 'https://shopware.smartpage.cc';
const login = 'adminer'
const password = '6vB7WptFiXufTcc9S6UDmaTfOLpZFOqKrQKTfbkq'

let fetching = false;

/**
 * Get Data from API and set them to AsyncStorage for faster reaccess.
 * @param paramsObject
 * @returns {Promise<T | never>}
 */
export async function getData(type,start,limit){

    let headers = new Headers({
        "Authorization": `Basic ${encode(`${login}:${password}`)}`
    })

    return fetch(URL+'/api/'+type+'?start='+start+'&limit='+limit,{headers:headers})
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.data;
    }).catch((error) => {
        console.error(error);
    });
}

export function searchJSON(json,searchField,searchValue){
    var results = [];
    for (var i=0 ; i < json.length ; i++)
    {
        if (json[i][searchField] == searchVal) {
            results.push(json[i]);
        }
    }
    return results;
}
