// Dictionary object with words, parts of speech, and definitions
const dictionary = {
    grotesque: {
        partOfSpeech: "adjective",
        definitions: ["Comically or repulsively ugly or distorted."]
    },
    label: {
        partOfSpeech: "noun",
        definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    debacle: {
        partOfSpeech: "noun",
        definitions: ["A sudden and ignominious failure; a fiasco."]
    },
    yes: {
        partOfSpeech: "noun",
        definitions: ["Used to give an affirmative response."]
    },
    panacea: {
        partOfSpeech: "noun",
        definitions: ["An answer or solution for all problems or difficulties."]
    },
    concatenation: {
        partOfSpeech: "noun",
        definitions: ["A series of interconnected or interdependent things or events."]
    },
    saw: {
        partOfSpeech: "verb",
        definitions: ["Cut (something) using a saw.", "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
    },
    crane: {
        partOfSpeech: "verb",
        definitions: ["Stretch out one's body or neck in order to see something.", "Move (a heavy object) with a crane."]
    },
    minute: {
        partOfSpeech: "noun",
        definitions: ["A period of time equal to sixty seconds or a sixtieth of an hour."]
    },

    parameter: {
       partOfSpeech:"noun", 
       definitions:["A limit or boundary that defines or restricts the scope of a particular process or system."]
    },

    shift: {
        partOfSpeech:"verb",
        definitions:["A function that removes the first item from a list or array."]
    },

    unshift:{
        partOfSpeech:"verb",
        definitions:["A function that adds an item to the beginning of a list or array."]
    },

    scope:{
        partOfSpeech:"noun",
        definitions:["The area where a variable can be used or accessed in your code."]
    },

    return:{
        partOfSpeech:"verb",
        definitions:["A command that sends a value back from a function."]
    },

    integer:{
        partOfSpeech:"noun",
        definitions:["A whole number (no decimals), like 1, -5, or 100."]
    },

    double:{
        partOfSpeech:"noun",
        definitions:["A number that can have decimal points, like 3.14 or -0.5."]
    },

    string:{
        partOfSpeech:"noun",
        definitions:["A sequence of characters, like hello or 123."]
    },

    character:{
        partOfSpeech:"noun",
        definitions:["A single symbol, like a, 1, or @."]
    },

    boolean:{
        partOfSpeech:"noun",
        definitions:["A value that is either true or false."]
    },

    index:{
        partofSpeech:"noun",
        definitions:["The position of an item in a list."]
    },

    element:{
        partOfSpeech:"noun",
        definitions:["An item inside a list."]
    },

    array:{
        partOfSpeech:"noun",
        definitions:["A list that stores multiple values."]
    },

    float:{
        partOfSpeech:"noun",
        definitions:["Makes element move to the left or right within its container, letting text or other elements wrap around it."]
    },

    input:{
        partOfSpeech:"verb",
        definitions:["To enter information or data into a system."]
    },

    property:{
        partOfSpeech:"noun",
        definitions:["Assign a style or behavior to an HTML element."]
    },

    background:{
        partOfSpeech:"noun",
        definitions:["Property that is used to change the background of HTML elements."]
    },

    margin:{
        partOfSpeech:"noun",
        definitions:["Just the space around the border of an element."]
    },

    font:{
        partOfSpeech:"noun",
        definitions:["The specific style of text that's printed on a page or displayed on a computer screen."]
    },

    display:{
        partOfSpeech:"noun",
        definitions:["Property is used to change how something is displayed on the website."]
    },

    

};

// Function to search for a word in the dictionary
function searchWord() {
    const wordInput = document.getElementById("wordInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    // Check if the word exists in the dictionary
    if (dictionary.hasOwnProperty(wordInput)) {
        const wordData = dictionary[wordInput];
        const definitions = wordData.definitions.map((def, index) => `<li>${index + 1}. ${def}</li>`).join("");
        
        // Display the word with part of speech and definitions
        resultDiv.innerHTML = `
            <strong>${wordInput}</strong> (${wordData.partOfSpeech}):
            <ul>${definitions}</ul>
        `;
    } else {
        // Display message if word not found
        resultDiv.innerHTML = "Word not found in the dictionary.";
    }
}