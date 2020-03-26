const { User } = require('../models');

module.exports = {
  async store(req,res){
    const { email } = req.body;
    let user = await User.findOne({where: {email}});
    if (!user){
      user = await User.create({email});
    }
    //const user = await User.create({ email });
    return res.json(user);
  }
}
