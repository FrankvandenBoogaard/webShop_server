const express = require('express');
const categoriesRouter = require('./routers/categoriesRouter');
const productsRouter = require('./routers/productsRouter');
const usersRouter = require('./routers/usersRouter');
const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);


app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
