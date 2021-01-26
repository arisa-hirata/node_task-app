const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Searver is up on port ${port}`);
});
