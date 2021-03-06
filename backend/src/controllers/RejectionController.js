/*
  Reprovação do agendamento de visita ao spot
*/
const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { booking_id } = req.params;

    const booking = await Booking.findById(booking_id).populate('spot');

    booking.approved = false ;

    await booking.save();

    const bookingUserSocket = req.connectedUsers[booking.user];

    if (bookingUserSocket) {
      //Envio de informação em tempo real para o mobile
      req.io.to(bookingUserSocket).emit('booking_response', booking);
    }

    return res.json(booking);
  }
};