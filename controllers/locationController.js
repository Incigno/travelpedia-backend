var Location = require('../models').Location;
var Sequelize = require('sequelize');

module.exports = {
  createLocation: (req, res, next) => {
    Location.create(req.body).then(location => {
      res.json({success:true,data:location,message:'create location success.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'create location failed.',error_message:error.toString()});
    });
  },
  getAllLocation: (req, res, next) => {
    Location.findAll().then(location => {
      res.json({success:true,data:location,message:'success get all location.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get all location.',error_message:error.toString()});
    });
  },
  getOneLocation: (req, res, next) => {
    var id = req.params.id;
    Location.findOne({
      where: {
        id: id
      },
      include:[{ all: true, nested: true }]
    }).then(location => {
      res.json({success:true,data:location,message:'success get location by id = '+id,error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get location by id = '+id,error_message:error.toString()});
    });
  },
  editLocation: (req, res, next) => {
    Location.update(req.body, {
      where: {
        id:req.params.id
      },
      returning: true,
    }).then(location => {
      res.json({success:true,data:location,message:'success update location.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed update location.',error_message:error.toString()});
    });
  }
}
