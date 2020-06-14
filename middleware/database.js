import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://prgrssnAdmin:omegaihatelev13@prgrssncluster-8kqbt.mongodb.net/prgrssnDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('prgrssnDB');
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;