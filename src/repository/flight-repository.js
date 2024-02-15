const {Flights} = require('../models/index');
const { Op } = require('sequelize');


class FlightRepository{

    #createFilter(data) {
        let filter={};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId
        }
        if (data.minPrice || data.maxPrice) {
            filter.price = {};
            if (data.minPrice) {
                filter.price[Op.gte] = data.minPrice;
            }
            if (data.maxPrice) {
                filter.price[Op.lt] = data.maxPrice;
            }
        }
        
         /* OR  if(data.minPrice && data.maxPrice) {
                Object.assign(filter, {
                    [Op.and]:[
                        {price:{[Op.gte]:data.minPrice}},
                        {price:{[Op.lte]:data.maxPrice}}
                    ]
                })
              }   
        */
        return filter;
    } 

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something wrong in flight-repository in create flight");
            throw{error};
        }
    }

    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("something wrong in flight repository in getAll");
            throw{error};
        }
    }
}

module.exports= FlightRepository;