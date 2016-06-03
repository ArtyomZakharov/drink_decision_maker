exports.makeADecision = function() {
    console.log(Math.ceil(Math.random() * 10) % 2 == 0 ? "Nah, fam" : "Go have a drink");
}
