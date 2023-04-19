function* makeId() {
    let id = 0;
    while(true) {
        yield id++;
    }
}
const gen = makeId();
console.log(gen.next());
console.log(gen.next());