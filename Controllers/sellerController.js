const Seller = require('../Models/SellerModel');
const Ticket = require('../Models/TicketModel');

function sellTicket(req, res) {
  Seller.findById(req.query.telegramUser, (err, sellerData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    Ticket.findById(req.query.ticketID, (errTicket, TicketData) => {
      if (errTicket) {
        return res.status(400).send(errTicket.message);
      }
      sellerData.updateTicketsSold();
      TicketData.sellTicket(sellerData.name);
      return res.status(200).send(err.message);
    });
    return res.status(404).send(err.message);
  });
}
function reservedTicket(req, res) {
  Seller.findById(req.query.telegramUser, (err, sellerData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    Ticket.findById(req.query.ticketID, (errTicket, TicketData) => {
      if (errTicket) {
        return res.status(400).send(errTicket.message);
      }
      TicketData.reservedTicket(req.query.name);
      return res.status(200).send(err.message);
    });
    return res.status(404).send(err.message);
  });
}

module.exports = {
  sellTicket,
  reservedTicket,
};
