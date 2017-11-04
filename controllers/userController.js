var User = require('../models').User;
var Location = require('../models').Location;
var passwordHash = require('password-hash');
var jwthelpers = require('../helpers/jwtHelpers');
var Sequelize = require('sequelize');
var Op = Sequelize.Op

module.exports = {
  editUser: (req, res, next) => {
    if (req.body.password) {
      req.body.password = passwordHash.generate(req.body.password);
    }
    User.update(req.body, {
      where: {
        id:req.params.id
      },
      returning: true,
    }).then(user => {
      res.json({success:true,data:user,message:'success update user.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed update user.',error_message:error.toString()});
    });
  },
  getAll: (req, res, next) => {
    User.findAll().then(user => {
      res.json({success:true,data:user,message:'success get all user.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get all user.',error_message:error.toString()});
    });
  },
  getbyId: (req, res, next) => {
    var id = req.params.key;
    User.findOne({
      where: {
        id: id
      }
    }).then(user => {
      res.json({success:true,data:user,message:'success get user by id.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get user by id.',error_message:error.toString()});
    });
  },
  getbyUsername: (req, res, next) => {
    var username = req.params.key;
    User.findOne({
      where: {
        username: username
      }
    }).then(user => {
      res.json({success:true,data:user,message:'success get user by username.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get user by username.',error_message:error.toString()});
    });
  },
  getbyEmail: (req, res, next) => {
    var email = req.params.key;
    User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      res.json({success:true,data:user,message:'success get user by email.',error_message:''});
    }).catch(error => {
      res.json({success:false,data:null,message:'failed get user by email.',error_message:error.toString()});
    });
  },
  signup: (req, res, next) => {
    req.body.password = passwordHash.generate(req.body.password);
    User.findOne({
      where: {
        [Op.or]: [
          {
            username: req.body.username
          },
          {
            email: req.body.email
          }
        ]
      }
    }).then(user => {
      if (user) {
        res.json({success:false,data:null,message:'signup failed.',error_message:'Username or Email is already exist.'});
      }else {
        User.create(req.body).then(user => {
          res.json({success:true,data:user,message:'signup success.',error_message:''});
        }).catch(error => {
          res.json({success:false,data:null,message:'signup failed.',error_message:error.toString()});
        });
      }
    }).catch(error => {
      res.json({success:false,data:null,message:'signup failed.',error_message:error.toString()});
    });
    
  },
  signin: (username, password, cb) => {
      User.findOne({
        where: {
          [Op.or]: [
            {
              username: username
            },
            {
              email: username
            }
          ]
        }
      }).then(user => {
        if (!user) {
          cb(null,{success:false,data:null,message:'Signin Failed',error_message:'Authentication failed. Username or Email not found.',token:null});
        } else if (user) {
          if (passwordHash.verify(password, user.password)) {
            cb(null,{success:true,data:user,message:'Signin Success',error_message:'',token:jwthelpers.sign(user)});
          } else {
            cb(null,{success:false,data:null,message:'Signin Failed',error_message:'Authentication failed. Wrong password.'});
          }
        }
      }).catch(error => {
        cb(null,{success:false,data:null,message:'Signin Failed',error_message:error.toString()});
      });
    },
    getTimeline: (req, res, next) => {
      Location.findAll({
        include: [{ all: true, nested: true }],
        order: [['createdAt', 'DESC']]
      }).then(user => {
        res.json({success:true,data:user,message:'success get all user.',error_message:''});
      }).catch(error => {
        res.json({success:false,data:null,message:'failed get all user.',error_message:error.toString()});
      });
    }
}
