const questions = [
    {
        title: "Question 1",
        question: "What is your cat's name?",
        type: "text"
    },
    {
        title: "Question 2",
        question: "What color is your cat most similar to?",
        type: "radio",
        options: 
        [
            {   text: "Dark",
                        personality: "None"}, 
            {   text: "Burnt",
                        personality: "None"}, 
            {   text: "Silver",
                        personality: "None"}, 
            {   text: "Light",
                        personality: "None"}   
                ]
    },
    {
        title: "Question 3",
        question: "Your cat sees you open the food cabinet. What is their reaction?",
        type: "radio",
        options: [
        {   text: "Waits Politely",
                    personality: "Gentlecat"}, 
        {   text: "Screams for food",
                    personality: "Princess"}, 
        {   text: "Instantly tries to eat",
                    personality: "Food Goblin"}, 
        {   text: "Walks away unbothered",
                    personality: "Aloof Philosopher"}, 
        {   text: "",
                    personality: "Angel Child"}, 
        {   text: "Looks at you lovingly",
                    personality: "Sweetie"},   
            ]
    },
    {
        title: "Question 4",
        question: "You come home after a long day. What does your cat do when you arrive?",
        type: "radio",
        options: [
        {   text: "Barely acknowledges you",
                personality: "Aloof Philosopher"}, 
        {   text: "Greets you calmly",
                personality: "Gentlecat"}, 
        {   text: "Cuddles you right away",
                personality: "Sweetie"}, 
        {   text: "Yells dramatically",
                personality: "Princess"}, 
        {   text: "Zooms around the house",
                personality: "Food Goblin"}, 
        {   text: "Soft little hello",
                personality: "Angel Child"},
            ] 
    },
    {
        title: "Question 5",
        question: "You stop petting them... what do they do?",
        type: "radio",
        options: [
        {   text: "Gets up and leaves",
                personality: "Aloof Philosopher"}, 
        {   text: "Accepts it gracefully",
                personality: "Gentlecat"}, 
        {   text: "Demands more",
                personality: "Princess"}, 
        {   text: "Headbutts you gently",
                personality: "Sweetie"}, 
        {   text: "Bites you",
                personality: "Food Goblin"}, 
        {   text: "Looks sad but stays",
                personality: "Angel Child"},
            ]
    },
    {
        title: "Question 6",
        question: "What is their favorite activity?",
        type: "radio",
        options: [
        {   text: "Sitting and observing",
                personality: "Aloof Philosopher"}, 
        {   text: "Being adored",
                personality: "Princess"}, 
        {   text: "Eating",
                personality: "Food Goblin"}, 
        {   text: "Sitting nicely beside you",
                personality: "Gentlecat"}, 
        {   text: "Cuddling",
                personality: "Sweetie"}, 
        {   text: "Gently playing with toys",
                personality: "Angel Child"},
            ]
    },
    {
        title: "Question 7",
        question: "Do they ever knock anything off the table?",
        type: "radio",
        options: [
        {   text: "Never",
                personality: "Angel Child"}, 
        {   text: "Only if necessary",
                personality: "Gentlecat"}, 
        {   text: "When searching for food",
                personality: "Food Goblin"}, 
        {   text: "Always on purpose",
                personality: "Princess"}, 
        {   text: "Occasionally for attention",
                personality: "Sweetie"}, 
        {   text: "Rarely, but mysteriously",
                personality: "Aloof Philosopher"},
            ]
    },
    {
        title: "Question 8",
        question: "How do they sleep?",
        type: "radio",
        options: [
        {   text: "Hidden and alone",
                personality: "Aloof Philosopher"}, 
        {   text: "Perfectly curled up",
                personality: "Gentlecat"}, 
        {   text: "On your face",
                personality: "Sweetie"}, 
        {   text: "Like royalty",
                personality: "Princess"}, 
        {   text: "They don't",
                personality: "Food Goblin"}, 
        {   text: "Soft and tiny",
                personality: "Angel Child"},
            ]
    },
    {
        title: "Question 9",
        question: "You're busy and cant spend time with them. How do they react?",
        type: "radio",
        options: [
        {   text: "Doesn't care",
                personality: "Aloof Philosopher"}, 
        {   text: "Climbs on your keyboard",
                personality: "Food Goblin"}, 
        {   text: "Sits near you",
                personality: "Sweetie"}, 
        {   text: "Quietly watches you",
                personality: "Angel Child"}, 
        {   text: "Scratches your furniture",
                personality: "Princess"}, 
        {   text: "Waits patiently",
                personality: "Gentlecat"},
        ]
    }
];