const wordCounter = (text, word) => {
    // attempt 1

    const regex = new RegExp(`${word}`, "ig");
    return text.match(regex).length;

    // attempt 2
    // return text.split(" ").filter((str) => str.toLowerCase() === word.toLowerCase()).length;
}


console.log(wordCounter("Hello my name name name is mohim", "name"));