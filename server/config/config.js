const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: 'SUPERSECRETPASSWORD123',
    DATABASE:
      'mongodb+srv://mizan:mizan@cluster0-d7ial.mongodb.net/bookshelf?retryWrites=true&w=majority'
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
