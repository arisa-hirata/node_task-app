require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('600631d50bc84dc631203119').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});
