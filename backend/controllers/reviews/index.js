const createReview = require('./createReview');
const getReview = require('./getReview');
const getReviews = require('./getReviews');
const updateReview = require('./updateReview');
const deleteReview = require('./deleteReview');
const getUserReviews = require('./getReviewbyUser');
const {getMarkedForReview} = require('./getMarkedReviews'); 

module.exports = {
  createReview,
  getReview,
  getReviews,
  updateReview,
  deleteReview,
  getUserReviews,
  getMarkedForReview,
};
