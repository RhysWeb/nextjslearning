const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	reviewComment: {
		type: String,
	},
	email: {
		type: String,
	},
	reviewScore: {
		type: String,
		required: true,
	},
	eventId: {
		type: String,
		required: true,
	},
	visitedBefore: {
		type: String,
	},
	dateTime: {
		type: String,
	},
});

module.exports = mongoose.model('Review', reviewSchema);
