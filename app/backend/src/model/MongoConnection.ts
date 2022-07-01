import mongoose from 'mongoose';

  const connectToDatabase = (
    mongoDatabaseURI = process.env.MONGO_URI
      || 'URL',
  ) => mongoose.connect(mongoDatabaseURI);

  export default connectToDatabase;