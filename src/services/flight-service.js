const { Op } = require('sequelize');
const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime} = require('../utils/helper')

class FlightService{

    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.flightRepository= new FlightRepository();
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error: 'arrival time should be greater than departure time'}
            }
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
     
    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log("something wrong in flight services in get all");
            throw{error};
        }

    }

    async getFlight(flightId) {
        try{
            const flights = await this.flightRepository.getFlight(flightId);
            return flights;
        }catch(error) {
            console.log("something wrong in flight services in get");
            throw{error};
        }
    }

    async updateFlight(flightId, data) {
        try{
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
        }catch(error) {
            console.log("something wrong in flight services in update");
            throw{error};
        }
    }
}

module.exports = FlightService;