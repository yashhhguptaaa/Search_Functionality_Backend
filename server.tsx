const express = require("express");
const axios = require("axios");
const cors = require('cors')
// const db= require('./db');
// const Pizza = require('./models/pizzaModel')
// const pizzaRoutes = require('./routes/pizzasRoute');
// const userRoutes = require('./routes/userRoute')
// const orderRoutes = require('./routes/ordersRoute');
// const path = require('path')

const app = express();
app.use(express.json());


// const corsOptions = {
//     origin: 'https://searching-red.vercel.app',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use('/api/pizzas',pizzaRoutes);
// app.use('/api/users',userRoutes);
// app.use('/api/orders',orderRoutes);

// if(process.env.NODE_ENV === 'production'){
//     app.use('/',express.static('client/build'))

//     app.get('*' , (req,res) => {

//         res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
//     })
// }

app.use(`/search_stock/:pageNumber`, async (req, res) => {
    try {
        let { pageNumber } = req.params;
        pageNumber = parseInt(pageNumber);

        const { keyword } = req.body;
        const response = await axios.get(
            `https://ticker-2e1ica8b9.now.sh/keyword/${keyword}`
        );
        const FlatArray = [].concat(...response.data);
        let numberOfRecords = [];
        if (FlatArray.length >= 5) {
            numberOfRecords = FlatArray.slice(pageNumber - 1, pageNumber + 4);
        } else {
            numberOfRecords = FlatArray.slice(0, FlatArray.length);
        }
        res.send(numberOfRecords)
    } catch (error) {
        return res.status(400).json({ message: "Error while fetching records." });
    }
});

app.use('/', (req, res) => {
    res.send("Server Working 🔥");
});



const port = process.env.PORT || 8000;
app.listen(port, () => { console.log(`Server running on port 🔥 : ${port}`) });