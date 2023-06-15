// const axios = require ('axios')
// const { Country } = require('../server/db.js')

// const uploadDB = async () => {
//     try {
//         const { data } = await axios('https://rest-countries.up.railway.app/v3/all') // https://rest-countries.up.railway.app/v3/all 

//         //if (!data) throw Error('Conexion con la API fallo')
//         // Transformar la respuesta de la API en un array de objetos que coincida con el modelo "Country"
//         const countriesData = []
//         await data.map(country => {
//             countriesData.push({
//                 id: country.cca3,
//                 name: country.name.common,
//                 image: country.flags.png,
//                 continent: country.continents[0],
//                 capital: country.capital? country.capital[0] : "Capital Not found", // Utilizo un condicional para los q no tengan definida una capital en la API, ya que la propiedad "Capital" es obligatoria
//                 subregion: country.subregion,
//                 area: country.area,
//                 poblation: country.population
//             })
//         });

//         console.log('::::::::::::::::');
//         console.log('Base de datos cargada con éxito.  Primer país en la BD:');
//         console.log(countriesData);

//         await Country.bulkCreate(countriesData);
//         uploadDB()
//     }
//     catch (error) {
//         console.log(error);
//         // Controller que tire alerta con msj del error
//         // alert Error(ERROR: "${error.message}")
//     }
// }

// module.exports = {
//     uploadDB
//     }