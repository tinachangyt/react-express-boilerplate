const express = require('express');
const app = express();
const PORT = 8080;

//heath check route to ensure express is running and connect with front end
app.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'success' })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
