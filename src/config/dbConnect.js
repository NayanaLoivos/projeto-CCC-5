import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://nayana:na123456@nayana.eatte.mongodb.net/node-express");

let db = mongoose.connection;

export default db;

