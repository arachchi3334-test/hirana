const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('iapp INNODATA!'));
app.listen(port, () => console.log(`Server running at http://3.95.160.192:${port}`));
