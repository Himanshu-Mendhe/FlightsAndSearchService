'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('airports',[
      {
        name: 'CSM International Airport',
        cityId: '6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dr BR Ambedkar International Airport',
        cityId: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Heathrow International Airport',
        cityId: '8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hindon Airport',
        cityId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Safdarjung Airport',
        cityId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luton International Airport',
        cityId: '8',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
