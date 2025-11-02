const mongoose = require('mongoose');

const EscrowSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['held', 'released', 'refunded'], default: 'held' },
  transactionRef: String,
  releasedAt: Date,
  refundedAt: Date,
});

module.exports = mongoose.model('Escrow', EscrowSchema);