const {City} = require ('../models/index');

class CityRepository {

    async createCity({name}){
        try{
            const city = await City.create({
                name
            });
            return city; 
        }catch(error){
            console.log("something wrong in city_repository in create city");
            throw{error};
        }
    };

    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id:cityId
                }
            });
            return true;
        }catch(error){
            console.log("something wrong in city_repository in delete city");
            throw{error};
        }
    };

    async updateCity(cityId, data){
        try{
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        }catch(error){
            console.log("something wrong in city_repository in update city");
            throw{error};
        }
    };

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("something wrong in city_repository in get city");
            throw{error};
        }
    };

    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities; 
        } catch (error) {
            console.log("something wrong in city_repository in get all cities");
            throw{error};
        }
    }
}
module.exports = CityRepository;