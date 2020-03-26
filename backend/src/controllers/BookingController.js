const { Booking } = require('../models');

module.exports = {
  async store(req, res){
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { data } = req.body;

    const booking = await Booking.create({
      userid: user_id,
      spotid: spot_id,
      data,
    });

    return res.json(booking);
  }
}
