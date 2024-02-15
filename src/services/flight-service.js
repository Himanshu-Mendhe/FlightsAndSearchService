const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService{

    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.flightRepository= new FlightRepository();
    }
    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId); //to fetch airplainId from airplan model 
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity // to add new value {..obj, newValue}
            });
            return flight;
        } catch (error) {
            console.log("something wrong in flight services in create");
            throw{error};
        }
    }
    async getFlightData(){
        //todo
    }
}

module.exports = FlightService;