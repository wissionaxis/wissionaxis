import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://lakshmithanuja694:muoAzPY1veUsdO5u@cluster0.0s4lo.mongodb.net/project';

if (!MONGO_URI) {
  throw new Error('Something wrong with the MongoDB url submitted!');
}

let cachedClient: mongoose.Mongoose | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { client: cachedClient };
  }

  const client = await mongoose.connect(MONGO_URI, {
    // No need for useNewUrlParser and useUnifiedTopology anymore
    //just see if there's a better approach to handle this if condition
  });

  cachedClient = client;
  return { client };
}

