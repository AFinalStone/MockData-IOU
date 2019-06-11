var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var communityRouter = require('./routes/community');
var messageRouter = require('./routes/message');
var adActivityRouter = require('./routes/adActivity');
var cacheRouter = require('./routes/cache');
var debtRouter = require('./routes/debt');
var payRouter = require('./routes/pay');
var noticeRouter = require('./routes/notice');
var labelRouter = require('./routes/label');
var consumerRouter = require('./routes/consumer');
var frontRouter = require('./routes/front');
var arbRouter = require('./routes/arb');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/iou/user', usersRouter);
app.use('/api/iou/community', communityRouter);
app.use('/api/message', messageRouter);
app.use('/api/adActivity', adActivityRouter);
app.use('/api/iou/front', cacheRouter);
app.use('/api/iou/debt', debtRouter);
app.use('/pay', payRouter);
app.use('/api/iou/notice', noticeRouter);
app.use('/api/iou/label', labelRouter);
app.use('/api/iou/consumer', consumerRouter);
app.use('/api/iou/front', frontRouter);
app.use('/api/arb', arbRouter);


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

// DEBUG=myapp:* npm start
