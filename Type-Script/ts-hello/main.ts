function doSomething() {
    // Do not use var keyword it expand its scope outside the block
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally... ' + i)  // i can not be accessed here > Correct
    console.log("-----")
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log('Finally... ' + j); // i can be accessed here > wrong

    // Anyway ts copiler comiler it to valid javascript code but 
    // we should always skip using var variables.
}

doSomething();