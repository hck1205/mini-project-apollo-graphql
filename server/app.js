const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

mongoose
  .connect(
    `mongodb+srv://ckhong:YXsI6k8KeCw0B0TY@cluster0-kisww.mongodb.net/book-react-dev?retryWrites=true`, {
      useNewUrlParser: true
    }).then(() => { // if success
      console.log("listening to port 8000")
      app.listen(8000);
    }).catch(err => {
      console.log(err);
    });

