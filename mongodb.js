// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID("60052657743abfa9a3253826") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     };

    //     console.log(user);
    // });

    // db.collection('users').find({ age: 31 }).toArray((error, users) => {
    //     console.log(users)
    // });

    db.collection('tasks').findOne({ _id: new ObjectID("600522fdfb3fe2a7db76af00") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch');
        }
        console.log(task);
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    });
});
