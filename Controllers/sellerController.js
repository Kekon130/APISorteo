const Seller = require('../Models/SellerModel');
const Ticket = require('./ticketController');

function sellTicket(req,res){
  Seller.findById(req.query.telegramUser, (err, sellerData) => {
    if(err) {
      return res.status(400).send(err.message);
    }
    sellerData.updateTicketsSold();
    return res.status(200).send(err.message);
  });
}