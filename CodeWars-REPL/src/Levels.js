
module.exports = [

    // LEVEL 1
    {
        grid: [
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],

        playerPosition: [1, 4],
        targetPositions: [
            [3, 1]
        ],

        targetTypes: [
            3
        ],

        introMessages: [
            "Please put the BOAT through its paces by picking up that buoy floating out there.",
            "To move up the BOAT, type: `BOAT.moveUp(1)` and press `Enter.`",
            "To move further, change 1 to any number you want. Just make sure to not go outside the area!"
        ]
    },

    {
        grid: [
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
            [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
            [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0]
        ],

        playerPosition: [7, 7],
        targetPositions: [
            [3, 5],
            [3, 3],
            [0, 0],
        ],

        targetTypes: [
            4,
            4,
            4
        ],

        introMessages: [
            "Phew! It looks like they wore their life jackets. But they can’t make back to safety.",
            "It’s up to you! Get the BOAT out there and bring them back! Watch out for the fire and smoke. They’re too turbulent to sail through.",
            "Treat the people like buoys!"
        ]
    },



    {
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],

        playerPosition: [0, 0],
        targetPositions: [
            [6, 0],
            [6, 5],
            [8, 7],
        ],

        targetTypes: [
            4,
            4,
            4
        ],

        introMessages: [
            "Oh no! There's a tsunami!",
            "Phew! It looks like they wore their life jackets. But they can’t make back to safety.",
            "It’s up to you! Get the BOAT out there and bring them back! Watch out for the fire and smoke. They’re too turbulent to sail through.",
            "Treat the people like buoys."
        ]
    },


    {
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 2],
            [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
            [0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        ],

        playerPosition: [7, 7],
        targetPositions: [
            [13, 0],
            [2, 3],
            [5, 7],
            [2, 8]
        ],

        targetTypes: [
            4,
            4,
            4,
            4
        ],

        introMessages: [
            "Thank you and congradulations! ",
            "It was hard work but we saved a lot of lives today.",
            "We hope you will continue learning to code."
        ]
    },

];