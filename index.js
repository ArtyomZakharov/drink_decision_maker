exports.makeADecision = function() {
    return (Math.ceil(Math.random() * 10) % 2 == 0 ? "Nah, fam" : "Go have a drink");
}
