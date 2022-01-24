/**
 * FileTypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  suscribeToAll :async(req, res) =>{
    console.log('HEEERRRREEEE');
    if (!req.isSocket) {
      throw {badRequest: 'Only a client socket can subscribe to Louies.  But you look like an HTTP request to me.'};
    }

    let specificfileType = await FileType.find({id : '61ead64328e4fa2ae940f177'});
    FileType.subscribe(req, _.pluck(specificfileType, 'id'));
    return res.json({specificfileType});
  }
};

