angular.module('MainService', []).factory('dataService', ['$http', function($http) {

    return {
        /**
         * Gets the user data.
         *
         * @return     {Array}  The user data.
         * uses local storage to store data.
         * Note : - Ideal case - can return a promise and send data after using http call to server and defer resolve
         */
        getUserData: function() {
            var data;
            if (!localStorage.getItem('globalData')) {
                data = [{ "id": "123", "email": "ntngiri@gmail.com", "name": "giri Nitin", "phone": "7042922775", "department": "naukri tech", "designation": "Designer", "qualification": { "selected": "1", "gradDetail": { "courseName": "Designer", "university": "Designer", "passingYear": "Designer" }, "postgradDetail": {} }, "city": { "selected": "2" }, "address": { "line1": "B 42 Sector 53" }, "pin": "201301", "workNature": { "selected": "Part time", "details": { "Timefrom": "10", "TimeTo": "3" } } }, { "id": "12345678", "email": "girintn@gmail.com", "name": "A K Giri", "phone": "7204635162", "department": "skvnsdkvn", "designation": "Designer", "qualification": { "selected": "1", "gradDetail": { "courseName": "kjnskjvndkjn", "university": "kjsdnfkjsn", "passingYear": "kjnskjvndkjn" }, "postgradDetail": {} }, "city": { "selected": "2" }, "address": { "line1": "SMQ 929/6 6th camp" }, "pin": "250401", "workNature": { "selected": "Part time", "details": { "Timefrom": "10", "TimeTo": "3" } } }];
                localStorage.setItem("globalData", JSON.stringify(data));
            } else {
                data = JSON.parse(localStorage.getItem('globalData'));
            }
            return data;
        },

        /**
         * Saves an user data.
         *
         * @param      {<type>}  data    The data
         */
        saveUserData: function(data) {
            //http call to save data in database 
            localStorage.setItem("globalData", JSON.stringify(data));
        }
    }

}]);
