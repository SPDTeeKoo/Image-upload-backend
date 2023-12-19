import mongoose from 'mongoose';

const momentSchema = new mongoose.Schema({
  comment: {
    type: String,
    maxlength: 100,
  },
  tags: [String],
  image: String, // Storing path to the image file
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Moment', momentSchema);
