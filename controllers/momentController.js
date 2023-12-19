import Moment from '../models/Moment.js';

export const addMoment = async (req, res) => {
  try {
    const { comment, tags } = req.body;
    const imagePath = req.file ? req.file.path : null;
    // const userId = req.user.id; // Assuming user ID is available in req.user after authentication

    const newMoment = new Moment({
      comment,
      tags: tags.split(','), // Convert comma-separated tags to an array
      image: imagePath,
      // userId,
    });

    await newMoment.save();

    res.status(201).json({ message: 'Moment added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
