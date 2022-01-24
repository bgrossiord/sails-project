/**
 * FileTypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const FileType = require('../models/FileType');

module.exports = {
  suscribeToAll :async(req, res) =>{
    console.log('HEEERRRREEEE');
    if (!req.isSocket) {
      throw {badRequest: 'Only a client socket can subscribe to Louies.  But you look like an HTTP request to me.'};
    }

    let specificfileType = await FileType.find();
    User.subscribe(req, _.pluck(usersNamedLouie, 'id'));
    return specificfileType;
  }
};

