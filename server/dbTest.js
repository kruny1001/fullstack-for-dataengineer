var User = require('./db').User
User.find({}, function (err, users) {
    console.log(users)
    process.exit()
})