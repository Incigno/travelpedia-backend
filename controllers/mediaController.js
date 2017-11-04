var Media = require('../models').Media;
var Sequelize = require('sequelize');

module.exports = {
  createMedia: (req, res, next) => {
    Media.create(req.body).then(media => {
      res.json({success:true,data:media,message:'create Media success.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'create Media failed.',error_message:error.toString()});
    });
  },
  getAllMedia: (req, res, next) => {
    Media.findAll().then(media => {
      res.json({success:true,data:media,message:'success get all media.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get all media.',error_message:error.toString()});
    });
  },
  getOneMedia: (req, res, next) => {
    var id = req.params.id;
    Media.findOne({
      where: {
        id: id
      }
    }).then(media => {
      res.json({success:true,data:media,message:'success get media by id = '+id,error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get media by id = '+id,error_message:error.toString()});
    });
  },
  editMedia: (req, res, next) => {
    Media.update(req.body, {
      where: {
        id:req.params.id
      },
      returning: true,
    }).then(media => {
      res.json({success:true,data:media,message:'success update media.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed update media.',error_message:error.toString()});
    });
  }
}
