require('../src/db/mongoose');
const { findByIdAndDelete, countDocuments, count } = require('../src/models/task');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('600631d50bc84dc631203119').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id, { completed: false });
    const conut = await Task.countDocuments({ completed: false });
    return conut;
};

deleteTaskAndCount('600611c675d16cbe909332a3').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});
