import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRESS}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db(process.env.DB_NAME);
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;