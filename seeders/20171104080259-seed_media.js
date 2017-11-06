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
    return queryInterface.bulkInsert('Media', [{
      mediaName: 'IMG_001',
      typeMedia: 'Image',
      sizeMedia: 1000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'IMG_002',
      typeMedia: 'Image',
      sizeMedia: 1000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'IMG_003',
      typeMedia: 'Image',
      sizeMedia: 1000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 3,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'IMG_004',
      typeMedia: 'Image',
      sizeMedia: 1000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 4,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'IMG_005',
      typeMedia: 'Image',
      sizeMedia: 1000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 5,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'VIDEO_001',
      typeMedia: 'Video',
      sizeMedia: 30000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'VIDEO_002',
      typeMedia: 'Video',
      sizeMedia: 30000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'VIDEO_003',
      typeMedia: 'Video',
      sizeMedia: 30000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 3,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'VIDEO_004',
      typeMedia: 'Video',
      sizeMedia: 30000,
      pathMedia: null,
      urlMedia: null,
      LocationId: 4,
      createdAt: new Date,
      updatedAt: new Date
    },{
      mediaName: 'VIDEO_005',
      typeMedia: 'Video',
      sizeMedia: 30000,
      pathMedia: null,
      urlMedia: null,
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
