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
   await queryInterface.bulkInsert('Airplanes',[
    {
      modelNumber: 'Boeing 747',
      capacity: 605,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Airbus A380',
      capacity: 853,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Boeing 777-200LR',
      capacity: 450,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Boeing 777-300ER',
      capacity: 550,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Airbus A330',
      capacity:410,
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
