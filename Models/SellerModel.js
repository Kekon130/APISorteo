const mongoose = require('mongoose');

const { Schema } = mongoose;

const sellerSchema = new Schema({
  name: { type: String, required: [true, 'Name required'] },
  telegramUser: { type: String, unique: true, required: [true, 'Telegram user required'] },
  ticketsSold: { type: Number, default: 0 },
});

function updateTicketsSold() {
  this.ticketsSold += 1;
}

sellerSchema.method = updateTicketsSold;
module.exports = mongoose.model('Seller', sellerSchema);