let greatThings = [
    "She's brave for petting Charlie!", 
    "Lip synch battles",
    "She loves trying new things",
    "She's the queen.",
    "Her photo bombing ability",
    "She always wants to make others feel special",
    "How she can't let a day go by without dancing",
    "Her incredible high energy",
    "She pushes other people to be their best",
    "She's so easily startled",
    "Her keen sense of style",
    "Her eye for interior design",
    "How Rolo is still her baby, even after Milo and Kaye were born",
    "She always brings back weird gummies from abroad",
    "Her passion for exercising and taking care of herself",
    "Her capacity to love and have compassion",
    "Her ability to make best friends with random people she meets",
    "Her enthusiastic use of digital sign language in photographs",
    "Elana is Elana. Mum, wife, daughter, sister, friend, confidente, life enthusiast. Elana. One in 8 billion.",
    "Elana is empathetic and caring, she wears her heart on her sleeve. She is generous, giving to family and friends, coworkers and strangers alike. Elana sees the world as a much better place than most. And unlike many, she tries to make it a better place for the people closest to her and far away.",
    "Elana is a great listener. She asks questions that let you know she is with you. She also always seems to know the right thing to say and that's no surprise because it's clear it comes from the heart. Elana is strong and unwavering - when we are in our darkest moments, when she is in her darkest moments.",
    "Elana is interested in so many things and it's part of what makes her so interesting. She is curious, ambitious, creative and proud. Whether it's a gym session, or running for town selectman, re-decorating the living room or launching partnerships with major fashion labels through her work, there are so many layers and each one more interesting.",
    "Elana is one of those people that lights up a room - cliche but true. Her laugh and smile are infectious, her sense of humor and storytelling is such that everyone stops to listen - you know it's going to be a good one. ",
    "Elana is love. You can see it in the way she looks at her boys and holds them. You can see it in the way she and Eamonn have their own language, finish each other's sentences and sometimes don't need to say anything at all - just a look, a smile, a laugh. You can hear it in the way she talks about her family. And you can feel it in her hugs.",
    "She's the best.",
    "I love playing with mommy",
    "I like to eat dinner with mommy",
    "Mommy tickles me",
    "She's the best mommy in the whole wide world"
]

console.log(greatThings.length)

const resultDiv = document.getElementById('result');  // Add this line

function randomThing(arr){
    let thisThingIndex = Math.floor(Math.random()*greatThings.length)
    let thisThing = greatThings[thisThingIndex]
    console.log(thisThing)
    
    resultDiv.innerText = `${thisThing}`  // Changed this line
}

const generateButton = document.getElementById('generateButton');
generateButton.onclick = function() {
    randomThing(greatThings);
};