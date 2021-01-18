// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert user');
    //         }

    //         console.log(result.ops)
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Kiyomitsu',
    //         age: 21
    //     }, {
    //         name: 'Yasusada',
    //         age: 19
    //     }
    // ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert documents!');
    //         }
    //         console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'find a job',
    //         completed: false
    //     }, {
    //         description: 'accomplish the position',
    //         completed: false
    //     }, {
    //         description: 'find your sparkle of life',
    //         completed: false
    //     }
    // ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert documents!');
    //         }
    //         console.log(result.ops);
    // });
});
