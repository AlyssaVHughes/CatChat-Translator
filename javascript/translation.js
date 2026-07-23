const personalityResponses = {

    "Angel Child":{
        Meow: [ 
            "Hi! I wanted to come see what you're doing!",
            "Can we spend some time together? I like being near you.",
            "I found you! I always feel happiest when we're together."
        ],
        Purr: [
            "I feel so peaceful when you hold me like this.",
            "This is my favorite place in the whole world.",
            "Thank you for loving me. I'll love you forever, too."
        ],
        Mew: [
            "1 Thank you for taking such good care of me.",
            "I got a tiny bit lonely. Will you keep me company?",
            "I have something very important to tell you... I love you!"
        ], 
        Hiss: [
            "Please don't scare me... I just wanted to be your friend.",
            "That was really frightening. Can we be nice to each other instead?",
            "I didn't mean to upset anyone... I'll just keep my distance for now."
        ]
        
    },

    "Princess": {
    Meow: [ 
        "My food bowl appears to be only 97% full. Fix it.",
        "Escort me to the soft blanket at once. I refuse to walk there myself.",
        "I require your immediate attention. Your schedule is irrelevant."
    ], 
    Purr: [ 
        "You may continue the royal pets. They are... adequate.",
        "You have earned exactly three more minutes of cuddling privileges.",
        "For someone of an unremarkable bloodline, your lap is surprisingly comfortable."
    ], 
    Mew: [ 
        "I deserve only the finest attention.",
        "Excuse me? Has everyone forgotten about the princess?",
        "I know I'm adorable."
    ], 
    Hiss: [ 
        "How DARE you! You have offended the crown!",
        "Touch me again without permission and I'll have you banished.",
        "Your peasant behavior is unacceptable."
    ]

},

    "Food Goblin": {
    Meow: [ 
        "I haven't eaten in at least seven minutes. I'm fading away.",
        "Is that food? It smells like food. Not that I care or anything...",
        "I heard the treat bag from three rooms away. Don't pretend you didn't."
        ],
    Purr: [ 
        "You may continue your excellent service.",
        "There's still room for dessert.",
        "Every moment not eating is a wasted opportunity."
        ], 
    Mew: [ 
        "I'm starving!",
        "Can I taste what you're eating? Just one bite.",
        "I know I already had dinner... but what about second dinner?"
        ], 
    Hiss: [ 
        "Back away from my snacks! They're mine now.",
        "I saw that. You were thinking about eating without sharing.",
        "Touch my food bowl again and you'll lose a finger"
        ]
    },

    "Sweetie": { 
    Meow: [
        "I've been looking everywhere for you!",
        "Where are we going? I'm coming too!",
        "You disappeared for five whole minutes. I almost perished from missing you."
    ],
    Purr: [
        "Don't stop petting me. Ever.",
        "If I could stay in your lap forever, I absolutely would.",
        "You're my favorite place in the whole world."
    ], 
    Mew: [
        "Pick me up! Pick me up! Pick me up!",
        "Can I have one more cuddle? ...How about twelve more?",
        "I love you this much! ...No, even MORE than that!"
    ], 
    Hiss: [
        "Back off! That's MY favorite human!",
        "Excuse me, they were cuddling ME first.",
        "Find your own person. This one is already taken."
    ]
},

    "Aloof Philosopher": {
    Meow: [
        "Have you ever wondered who truly owns the house?",
        "The food bowl is empty... or perhaps our expectations are simply too full.",
        "I find peace in solitude."
    ],
    Purr: [
        "Contentment is not found. It is accepted.",
        "This moment asks for nothing more than silence and warm blankets.",
        "There is great wisdom to be found on a comfortable lap."

    ],
    Mew: [
        "If I chase the red dot, who is really being led?",
        "Every closed door is simply an invitation to wonder what lies beyond.",
        "I seek answers... though a snack would also be acceptable."
    ],
    Hiss: [
        "Boundaries are the foundation of every healthy relationship.",
        "Conflict is merely two perspectives refusing to share the same sunbeam.",
        "Your presence disturbs the tranquility I worked so hard to cultivate."
    ]
}, 

    "Gentlecat": {
    Meow: [
        "Good day to you! I was hoping we might spend a little time together.",
        "Pardon the interruption, but I believe it may be dinner time.",
        "If it isn't too much trouble, might I accompany you?"
    ],
    Purr: [
        "Your kindness is sincerely appreciated.",
        "This has been a most delightful cuddle. Thank you.",
        "I couldn't ask for finer company."
    ],
    Mew: [
        "If you have a spare moment, I would be grateful for a few gentle pets.",
        "Whenever you're available, I would quite enjoy sitting on your lap.",
        "Would you be so kind as to open the door? I would be ever so thankful."
    ],
    Hiss: [
        "I must politely ask that you give me a bit more personal space.",
        "I'm terribly sorry, but I'm feeling rather overwhelmed at the moment.",
        "With all due respect, I would prefer not to be pet right now."
    ]
} 

};

const purrButton = document.getElementById('purr-button');
const meowButton = document.getElementById('meow-button');
const mewButton = document.getElementById('mew-button');
const hissButton = document.getElementById('hiss-button');


purrButton.addEventListener("click", () => translate("Purr"));
meowButton.addEventListener("click", () => translate("Meow"));
mewButton.addEventListener("click", () => translate("Mew"));
hissButton.addEventListener("click", () => translate("Hiss"));  

function translate(sound) {
    console.log("Button clicked: " + sound);
    const responses = personalityResponses[winner][sound];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const speechContainer = document.getElementById('speech-container');
    
    console.log(winner);

    speechContainer.innerHTML = `
    <img class="speech-bubble" src="../images/UI/speech_bubble.png" alt="Purr">
    <p id="speech-text" class="speech-text"></p>
`;

const speechText = document.getElementById('speech-text');

typeWriter(speechText, randomResponse);

}
