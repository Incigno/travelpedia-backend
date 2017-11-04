'use strict';

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
    return queryInterface.bulkInsert('Facilties', [{
      facilityName: 'Toilet',
      iconName: 'ico-Toilet',
      rating: 4,
      LocationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Parking',
      iconName: 'ico-Parking',
      rating: 4,
      LocationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Wifi',
      iconName: 'ico-Wifi',
      rating: 4,
      LocationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Water',
      iconName: 'ico-Water',
      rating: 4,
      LocationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Transportation',
      iconName: 'ico-Transportation',
      rating: 4,
      LocationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Wifi',
      iconName: 'ico-Wifi',
      rating: 4,
      LocationId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Water',
      iconName: 'ico-Water',
      rating: 4,
      LocationId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Transportation',
      iconName: 'ico-Transportation',
      rating: 4,
      LocationId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Parking',
      iconName: 'ico-Parking',
      rating: 4,
      LocationId: 3,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Wifi',
      iconName: 'ico-Wifi',
      rating: 4,
      LocationId: 3,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Parking',
      iconName: 'ico-Parking',
      rating: 4,
      LocationId: 4,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Toilet',
      iconName: 'ico-Toilet',
      rating: 4,
      LocationId: 5,
      createdAt: new Date,
      updatedAt: new Date
    },{
      facilityName: 'Parking',
      iconName: 'ico-Parking',
      rating: 4,
      LocationId: 5,
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
