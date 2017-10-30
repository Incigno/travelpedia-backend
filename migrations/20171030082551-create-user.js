'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      bankAccountNumber: {
        type: Sequelize.INTEGER
      },
      bankBranch: {
        type: Sequelize.STRING
      },
      bankName: {
        type: Sequelize.STRING
      },
      nameInBank: {
        type: Sequelize.STRING
      },
      isEmailVerified: {
        type: Sequelize.BOOLEAN
      },
      isPhoneVerified: {
        type: Sequelize.BOOLEAN
      },
      imageProfilUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};