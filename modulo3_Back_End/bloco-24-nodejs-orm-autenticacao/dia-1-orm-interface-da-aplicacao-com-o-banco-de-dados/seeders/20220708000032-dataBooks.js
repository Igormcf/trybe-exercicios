'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Livro 1',
        author: 'author 1',
        pageQuantity: 1,
      },
      {
        title: 'Livro 2',
        author: 'author 2',
        pageQuantity: 2,
      },
      {
        title: 'Livro 3',
        author: 'author 3',
        pageQuantity: 3,
      },
      {
        title: 'Livro 4',
        author: 'author 4',
        pageQuantity: 4,
      },
      {
        title: 'Livro 5',
        author: 'author 5',
        pageQuantity: 5,
      },
      {
        title: 'Livro 6',
        author: 'author 6',
        pageQuantity: 6,
      },
      {
        title: 'Livro 7',
        author: 'author 7',
        pageQuantity: 7,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
