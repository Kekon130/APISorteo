const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  id: { type: Number, unique: true, required: [true, 'ID required'] },
  name: { type: String, required: [true, 'Name required'] },
  category: { type: String, required: [true, 'Category required'] },
  isReserved: { type: Boolean, default: false },
  isSold: { type: Boolean, default: false },
  reservedBy: { type: String },
  reservedDate: { type: Date },
  soldBy: { type: String },
  soldDate: { type: Date },
  imageURI: { type: String, required: [true, 'Image URI required'] },
});
function sellTicket(name) {
  this.soldDate = Date.now();
  this.isSold = true;
  this.soldBy = name;
}
function reservedTicket(name) {
  this.isReserved = true;
  this.reservedBy = name;
  this.reservedDate = Date.now();
}

module.exports = {
  sellTicket,
  reservedTicket,
};
module.exports = mongoose.model('Ticket', ticketSchema);
