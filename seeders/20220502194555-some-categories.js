'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'categories',
      [
        { title: 'Electronics', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Jewelery', createdAt: new Date(), updatedAt: new Date() },
        {
          title: "Men's Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Women's Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
  },
};
