require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('60060f859bfc6fbdf6c023c0', { age: 1 }).then((user) => {
//     console.loga(user);
//     return User.countDocuments({ age: 1 });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('60060f859bfc6fbdf6c023c0', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});
