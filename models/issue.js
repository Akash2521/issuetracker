const mongoose = require('mongoose');

const Issue = mongoose.model('Issue', {
  title: String,
  description: String,
  priority: Number,
  status: String,
});

module.exports = Issue;