/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//CB NOTES: at this point i didn't understand enough of how sails works/api set up works ... 
//i would have named this file MASH episodes or something

module.exports = {

  attributes: {
    episode: {
      type: 'string',
      unique: true,
      required: true
    },

    season: {
      type: 'integer',
      unique: false,
      required: true
    },

    whyawesome: {
      type: 'string',
      unique: false,
      required: true
    },

    rateit: {
      type: 'text',
      unique: false,
      required: true
    },

    favoriteline: {
      type: 'text',
      unique: false,
      required: true
    },

  }
};
