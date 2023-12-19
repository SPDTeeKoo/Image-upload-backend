import jwt from 'jsonwebtoken';

export const requireSignIn = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Unauthorized access' });
      } else {
        req.user = decodedToken; // Set the user data in the request object
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Unauthorized access' });
  }
};
