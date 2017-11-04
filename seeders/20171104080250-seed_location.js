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
    
    return queryInterface.bulkInsert('Locations', [{
      locationName: 'Cipondoh',
      description: 'Danau cipondoh',
      additionalInfo: 'Banyak bebek',
      latitude: 36.810997, 
      longitude: 34.641652,
      UserId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      locationName: 'Ciledug',
      description: 'Danau Ciledug',
      additionalInfo: 'Banyak bebek',
      latitude: 36.810997, 
      longitude: 34.641652,
      UserId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      locationName: 'Cikokol',
      description: 'Danau Cikokol',
      additionalInfo: 'Banyak bebek',
      latitude: 36.810997, 
      longitude: 34.641652,
      UserId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      locationName: 'Jakarta Barat',
      description: 'Mall Taman Anggrek',
      additionalInfo: 'Bawa duit yang banyak',
      latitude: 36.810997, 
      longitude: 34.641652,
      UserId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      locationName: 'Hotel Alexis',
      description: 'Hotel Anu....',
      additionalInfo: 'Bawa duit yang banyak',
      latitude: 36.810997, 
      longitude: 34.641652,
      UserId: 3,
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
