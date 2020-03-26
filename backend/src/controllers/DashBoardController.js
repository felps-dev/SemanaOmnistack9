const { Spot } = require('../models');
module.exports = {
  async show(req, res){
    const { user_id } = req.headers;
    spots = await Spot.findAll({where: {userId: user_id}});
    return res.json(spots);
  }
}
