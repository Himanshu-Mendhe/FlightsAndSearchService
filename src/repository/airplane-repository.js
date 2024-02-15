const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("something wrong in airplain-repository in get");
            throw{error};
        }
    }
}

module.exports= AirplaneRepository;
