const wordCounter = (text, word) => {
    // attempt 1

    const regex = new RegExp(`${word}`, "ig");
    return text.match(regex).length;
}


console.log(wordCounter("Hello my name name name is mohim", "name"));