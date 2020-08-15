let happyQuotes = [
    "Learn to value yourself, which means: fight for your happiness.",
    "The true secret of happiness lies in the taking a genuine interest in all the details of daily life",
    "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
    "People should find happiness in the little things, like family.",
    "Happiness is not an ideal of reason, but of imagination.",
    "To be without some of the things you want is an indispensable part of happiness.",
    "The secret of happiness is freedom, the secret of freedom is courage.",
    "The only way to find true happiness is to risk being completely cut open.",
    "Nobody really cares if you’re miserable, so you might as well be happy.",
    "Happiness is the interval between periods of unhappiness."
];

let sadQuotes = [
    "Things change. And friends leave. Life doesn't stop for anybody.",
    "Breathing is hard. When you cry so much, it makes you realize that breathing is hard.",
    "You cannot protect yourself from sadness without protecting yourself from happiness.",
    "Tears come from the heart and not from the brain.",
    "To have felt too much is to end in feeling nothing.",
    "People keep telling me that life goes on, but to me that’s the saddest part.",
    "It's sad when someone you know becomes someone you knew.",
    "It will never rain roses: when we want to have more roses, we must plant more roses.",
    "Life's under no obligation to give us what we expect.",
    "One thing you can't hide — is when you're crippled inside."
];

//let singularPronouns = ["He", "she", "It","The car", "That person", "John", "Jane", "The house", "The dog", "The cat","The weather" ];
//let pluralPronouns =["They", "The flowers", "These bikes", "Those People", "Those guys", "Those girls", "The dogs", "The cats", "Boats"];

function getPositiveQuotes () {
    let i = Math.round(Math.random()*(happyQuotes.length -1 ));
    document.getElementById("quoteDisplay").innerHTML = happyQuotes[i];
}

function getNegativeQuotes () {
    let i = Math.round(Math.random()*(sadQuotes.length -1 ));
    document.getElementById("quoteDisplay").innerHTML = sadQuotes[i];
}

