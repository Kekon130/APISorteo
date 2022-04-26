const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema({
  name: { type: String, required: [true, 'Name required'] },
  telegramUser: { type: String, unique: true, required: [true, 'Telegram user required'] },
});



module.exports = mongoose.model('Admin', adminSchema);