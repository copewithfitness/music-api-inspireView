// app.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/albumRoutes'); // we’ll rename this in code only, not file

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Route prefix changed from /albums to /products
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
