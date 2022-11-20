const mongoUtil = require("../mongoUtil");
const { ObjectId } = require("mongodb");

const createReview = async (review) => {
  const db = mongoUtil.getDB();
  const reviews = await db.collection("reviews");
  try {
    const result = await reviews.insertOne(review);
    return result.insertedId;
  } catch (err) {
    return err;
  }
};

const getReviewByMovie = async (movieId) => {
  const db = mongoUtil.getDB();
  const reviews = await db.collection("reviews");
  const query = { movieId: movieId };
  try {
    const result = await reviews.find(query).toArray();
    return result;
  } catch (err) {
    return err;
  }
};

const getReviewById = async (id) => {
  const db = mongoUtil.getDB();
  const reviews = await db.collection("reviews");
  const query = { _id: ObjectId(id) };
  try {
    const result = await reviews.findOne(query);
    return result;
  } catch (err) {
    return err;
  }
};

const updateReviewById = async (reviewId, content) => {
  const db = mongoUtil.getDB();
  const reviews = await db.collection("reviews");

  try {
    const filter = { _id: ObjectId(reviewId) };
    const updateDocument = {
      $set: {
        content: content,
      },
    };
    await reviews.updateOne(filter, updateDocument);
    const result = reviews.findOne(filter);
    return result;
  } catch (err) {
    return err;
  }
};

const deleteReviewById = async (id) => {
  const db = mongoUtil.getDB();
  const reviews = await db.collection("reviews");
  try {
    const query = { _id: ObjectId(id) };
    const result = await reviews.deleteOne(query);
    return `delete ${result.deletedCount} review`;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createReview,
  getReviewByMovie,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
