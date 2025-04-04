const Review = require('../../models/Review');

const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Check if this is a status update from admin
    if (req.body.status && (req.body.status === 'accepted' || req.body.status === 'rejected')) {
      review.status = req.body.status;
      review.mlStatus = req.body.status; // Update mlStatus as well
      await review.save();
      return res.json({ message: 'Review status updated successfully', review });
    }

    // For other updates, check if review is pending
    if (review.status !== 'pending') {
      return res.status(400).json({ error: 'Review cannot be updated' });
    }

    Object.assign(review, req.body);
    await review.save();
    res.json({ message: 'Review updated successfully', review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateReview;
