const { User } = require('../models');
const { Spot } = require('../models');
const Sequelize = require('sequelize');
const { fn, col, cast, Op} = Sequelize;

module.exports = {

  async index(req, res){
    const { tech } = req.query;

    //O MySQL não tem tipo Array, e o sequelize também não tem a mesma função de pesquisa do Mongoose, tive que adotar outro método
    const spots = await Spot.findAll({
        where: Sequelize.where(fn('JSON_SEARCH', col('techs'), 'all', cast(tech, 'CHAR CHARACTER SET utf8')), Op.gt, 0)
      });

    return res.json(spots);
  },

  async store(req,res){
    const {filename} = req.file;
    const {company, techs, price} = req.body;
    const {user_id} = req.headers;

    const user = await User.findByPk(user_id);

    if (!user){
      return res.status(400).json({error: "Usuário não existe"});
    }

    const spot = await Spot.create({
      userId: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price
    })

    return res.json(spot);
  }
}
