'use strict';
var passwordHash = require('password-hash');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'wisnu',
      password: passwordHash.generate('wisnu123'),
      fullname: 'wisnu full',
      dob: new Date,
      gender: 'Pria',
      address: 'tebet',
      email: 'wisnu@example.com',
      phone: '+628282828828',
      age: 20,
      bankBranch: 'tebet',
      bankName: 'BNI',
      nameInBank: 'wisnu',
      isEmailVerified: false,
      isPhoneVerified: false,
      imageProfilUrl: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      username: 'didit',
      password: passwordHash.generate('didit123'),
      fullname: 'didit full',
      dob: new Date,
      gender: 'Pria',
      address: 'tebet',
      email: 'didit@example.com',
      phone: '+628282828828',
      age: 20,
      bankBranch: 'tebet',
      bankName: 'MANDIRI',
      nameInBank: 'didit',
      isEmailVerified: false,
      isPhoneVerified: false,
      imageProfilUrl: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      username: 'michael',
      password: passwordHash.generate('michael123'),
      fullname: 'michael full',
      dob: new Date,
      gender: 'Pria',
      address: 'tebet',
      email: 'michael@example.com',
      phone: '+628282828828',
      age: 20,
      bankBranch: 'tebet',
      bankName: 'BCA',
      nameInBank: 'michael',
      isEmailVerified: false,
      isPhoneVerified: false,
      imageProfilUrl: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      username: 'abi',
      password: passwordHash.generate('abi123'),
      fullname: 'abi full',
      dob: new Date,
      gender: 'Pria',
      address: 'tebet',
      email: 'abi@example.com',
      phone: '+628282828828',
      age: 20,
      bankBranch: 'tebet',
      bankName: 'BRI',
      nameInBank: 'abi',
      isEmailVerified: false,
      isPhoneVerified: false,
      imageProfilUrl: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      username: 'webby',
      password: passwordHash.generate('webby123'),
      fullname: 'webby full',
      dob: new Date,
      gender: 'Pria',
      address: 'tebet',
      email: 'webby@example.com',
      phone: '+628282828828',
      age: 20,
      bankBranch: 'tebet',
      bankName: 'CIMB',
      nameInBank: 'webby',
      isEmailVerified: false,
      isPhoneVerified: false,
      imageProfilUrl: null,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
