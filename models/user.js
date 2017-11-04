'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      allowNull: false
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
    fullname: {
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate:{
        isDate: true,
      }
    },
    dob: {
      type:DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      validate:{
        isDate: true,
      }
    },
    gender:  {
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate:{
        isIn: [['Pria', 'Wanita']],
      }
    },
    address: {
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true,
      }
    },
    phone: {
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate:{
        isNumeric: true,
      }
    },
    age: {
      type:DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate:{
        isNumeric: true,
      }
    },
    bankAccountNumber: {
      type:DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate:{
        isNumeric: true,
        min: 8,
      }
    },
    bankBranch: {
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    bankName: {
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    nameInBank: {
      type:DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    isEmailVerified: DataTypes.BOOLEAN,
    isPhoneVerified: DataTypes.BOOLEAN,
    imageProfilUrl: DataTypes.STRING
  });
  
  User.associate = function (models) {
    User.hasMany(models.Location)
  };
  return User;
};