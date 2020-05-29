const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = () => {
  return new User({}).save();
};

afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.disconnect();
  done();
});
