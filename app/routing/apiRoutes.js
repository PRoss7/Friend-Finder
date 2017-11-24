// GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatability logic

var friendsArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {

        res.json(friendsArray);

    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        // Calculate the difference between each of the numbers and user's numbers
        // Then it will choose the user with the least differences as a match
        // Push user to database

        var bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
        };

        var userData = req.body;
        var userScores = userData.scores;

        // This will calculate the difference between user's scores and the scores of each user in the database
        var totalDifference;

        // Loop through all the friend possibilities 
        for (var i = 0; i < friendsArray.length; i++) {

            var currentFriend = friendsArray[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            // Loop through all the scores of each friend
            for (var j = 0; j < currentFriend.scores.length; j++) {

                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

            }

            if (totalDifference <= bestMatch.difference) {

                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.difference = totalDifference;

            }

        }

        friendsArray.push(userData);

        res.json(bestMatch);

        console.log(bestMatch);

    });

}