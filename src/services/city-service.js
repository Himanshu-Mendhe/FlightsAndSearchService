const {CityRepository} = require ('../repository/index');

class CityService{
    constructor() {
        this.cityRepository = new CityRepository(); 
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something wrong in city services in create");
            throw{error};
        }
    };

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something wrong in city services in delete");
            throw{error};
        }
    };

    async updateCity(cityId, data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("something wrong in city services in update");
            throw{error};
        }
    };

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something wrong in city services in get");
            throw{error};
        }
    };

    async getAllCities() {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("something wrong in city services in get all ")
            throw{error};
        }
    };
}

module.exports = CityService;
