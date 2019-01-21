const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  company: { type: String, require: true },
  position: { type: String, require: true },
  industry: [{ type: String, enum: ['Finance', 'Tech', 'FinTech', 'Other'], require: true }],
  area: [{ type: String, enum: ['Financial Regulation', 'Corporate', 'Real Estate', 'Other'], require: true }], // enum
  salary_band: { type: String, enum: ['less than 50k', '50k - 75k', '75k - 100k', '100k - 150k', 'more than 150k'], require: true },
  company_size: { type: String, enum: ['1 - 10', '10 - 25', '25 - 50', '50 - 100', '100 - 500', '500+'] },
  location: { type: String, require: true },
  pqe: { type: Number, max: 5, require: true },
  wildcard: { type: Boolean, default: false, require: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Listing', listingSchema);
