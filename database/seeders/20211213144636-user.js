'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      profileImg: 'DataTypes.STRING',
      firstName: 'DataTypes.STRING',
      lastName: 'DataTypes.STRING',
      email: 'DataTypes.STRING',
      phone: 'DataTypes.STRING',
      password: 'DataTypes.STRING',
      dob: 'DataTypes.STRING',
      gender: 'male',
      token: 'DataTypes.STRING',
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
