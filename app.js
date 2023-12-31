var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require("./routes/category/routes");
var supplierRouter = require('./routes/supplier/router');
var productRouter = require('./routes/product/router');
// var getlistproductsRouter = require('./routes/getlistproducts/routes');
var discountRouter = require('./routes/discount/router');



const { mongo } = require("mongoose");
const { default: mongoose } = require("mongoose");
const { DATABASE } = require("./constants/dbSetting");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cors({
    origin: "*",
  })
);

mongoose.set("strictQuery", false);
mongoose.connect(DATABASE);



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/category", categoryRouter);
app.use("/supplier", supplierRouter);
app.use("/product", productRouter);
// app.use("/getlistproducts", getlistproductsRouter);
app.use("/discount", discountRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
