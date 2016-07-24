// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});


var data = [{"id":"123","email":"ntngiri@gmail.com","name":"giri Nitin","phone":"7042922775","department":"naukri tech","designation":"Designer","qualification":{"selected":"1","gradDetail":{"courseName":"Designer","university":"Designer","passingYear":"Designer"},"postgradDetail":{}},"city":{"selected":"2"},"address":{"line1":"B 42 Sector 53"},"pin":"201301","workNature":{"selected":"Part time","details":{"Timefrom":"10","TimeTo":"3"}}},{"id":"12345678","email":"girintn@gmail.com","name":"A K Giri","phone":"7204635162","department":"skvnsdkvn","designation":"Designer","qualification":{"selected":"1","gradDetail":{"courseName":"kjnskjvndkjn","university":"kjsdnfkjsn","passingYear":"kjnskjvndkjn"},"postgradDetail":{}},"city":{"selected":"2"},"address":{"line1":"SMQ 929/6 6th camp"},"pin":"250401","workNature":{"selected":"Part time","details":{"Timefrom":"10","TimeTo":"3"}}}];

// var dataToExport = {item:data};
// module.exports dataToExport