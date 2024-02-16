const {AirportService} = require ('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            date: response,
            success: true,
            message: "successfully created an airport",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to create an airport ",
            err: error
        })
    }
}

const destroy = async (req,res) => {
    
}

const get = async (req,res) => {
    
}

const getAll = async (req,res) => {
    
}

const update = async (req,res) => {
    
}

module.exports =  {
    create,
    destroy,
    get,
    getAll,
    update
}