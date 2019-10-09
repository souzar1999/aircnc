/*
    Gerencia solicitação de agendamento de visita ao spot
*/
const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        });

        await booking.populate('user').populate('spot').execPopulate();

        const ownerSocket = req.connectedUsers[booking.spot.user];

        /*
            notifica usuário que cadastrou spot em tempo real
        */
        if ( ownerSocket ) {
            req.io.to(ownerSocket).emit('booking_request', booking);
        }

        return res.json(booking);
    }
}