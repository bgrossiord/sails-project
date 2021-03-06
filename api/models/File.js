/**
 * File.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    schema: {
      model: 'FileType',
      required: true,
    },

    file: {
      type: 'json',
      required: true,
    },

  },

};

