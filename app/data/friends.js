// save apps data inside of app/data/friends.js as an array of objects

// Convert each user's results into a simple array of numbers
// Compare the difference between current user's scores against those from other users, question by question. Add up the difference to calculate the totalDifference.
// Use absolute value of the differences- no negative solutions. app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference

var friendsArray = [

    {

        name: "Rick",
        photo: "/images/Rick.png",
        scores: [
            5,
            1,
            1,
            5,
            5,
            1,
            5,
            1,
            2,
            1
        ]

    },

    {

        name: "Morty",
        photo: "/images/morty.gif",
        scores: [
            3,
            5,
            4,
            2,
            4,
            3,
            5,
            2,
            1,
            5
        ]

    },

    {

        name: "Beth",
        photo: "/images/beth.jpg",
        scores: [
            5,
            4,
            3,
            5,
            2,
            1,
            4,
            5,
            2,
            4
        ]

    },

    {

        name: "Summer",
        photo: "/images/summer.jpg",
        scores: [
            2,
            3,
            4,
            2,
            4,
            3,
            5,
            2,
            1,
            5
        ]

    },

    {

        name: "Jerry",
        photo: "/images/jerry.jpg",
        scores: [
            3,
            5,
            4,
            2,
            4,
            3,
            5,
            2,
            1,
            5
        ]

    }
];



module.exports = friendsArray;