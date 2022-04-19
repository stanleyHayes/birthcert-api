const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const clientRequestV1Routes = require("./routes/v1/client/requests");
const clientPaymentV1Routes = require("./routes/v1/client/payments");
const adminPaymentV1Routes = require("./routes/v1/admin/payments");
const adminRequestV1Routes = require("./routes/v1/admin/requests");
const adminDashboardV1Routes = require("./routes/v1/admin/dashboard");

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(value => {
        console.log(`Connected to MongoDB on database ${value.connection.db.databaseName}`)
    }).catch(error => {
    console.log(`Error connecting to Mongo DB: ${error.message}`);
});


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/user/requests', clientRequestV1Routes);
app.use('/api/v1/user/payments', clientPaymentV1Routes);
app.use('/api/v1/admin/payments', adminPaymentV1Routes);
app.use('/api/v1/admin/requests', adminRequestV1Routes);
app.use('/api/v1/admin/dashboard', adminDashboardV1Routes);

app.listen(process.env.PORT || 8004, () => {
    console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
})
