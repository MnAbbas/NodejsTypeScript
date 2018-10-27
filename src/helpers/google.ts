import {Promise} from 'es6-promise'

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBzuM7atg360ClN4hmao7J3Y0UbvxSrkx8',
    Promise: Promise
  });
   
//  ["22.577210, 114.098130"]  , ["22.701989, 114.112032"]
 async function getDistance(orgins : any, destinations : any) : Promise<any>  {

  return new Promise((resolve, reject) => {
    let retvalue =0
    googleMapsClient.distanceMatrix({origins : orgins , destinations: destinations })
            .asPromise()
            .then((response : any) => {
              retvalue=response.json.rows[0].elements[0].distance.value;
              resolve(retvalue)
              // return response.json.rows[0].elements[0].distance.value
            })
            .catch((err : any) => {
              reject(err)
            });
  });


  }


 export default getDistance