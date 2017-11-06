var Facilty = require('../models').Facilty;
var Sequelize = require('sequelize');

module.exports = {
  createFacilty: (req, res, next) => {
    Facilty.create(req.body).then(facility => {
      res.json({success:true,data:facility,message:'create facility success.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'create facility failed.',error_message:error.toString()});
    });
  },
  getAllFacilty: (req, res, next) => {
    Facilty.findAll().then(facility => {
      res.json({success:true,data:facility,message:'success get all facility.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get all facility.',error_message:error.toString()});
    });
  },
  getOneFacilty: (req, res, next) => {
    var id = req.params.id;
    Facilty.findOne({
      where: {
        id: id
      }
    }).then(facility => {
      res.json({success:true,data:facility,message:'success get facility by id = '+id,error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get facility by id = '+id,error_message:error.toString()});
    });
  },
  editFacility: (req, res, next) => {
    Facilty.update(req.body, {
      where: {
        id:req.params.id
      },
      returning: true,
    }).then(facility => {
      res.json({success:true,data:facility,message:'success update facility.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed update facility.',error_message:error.toString()});
    });
  }
}
