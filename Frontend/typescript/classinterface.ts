class Animal {
    eat() { console.log("kha lo kha lo"); }
    sleep() { }
    procreate() { }
}

class Human extends Animal {
    //* Automatically "inherits" Animal
}

interface Engineer {
    passBEExam(): void;
}

interface Musician {
    playMusic(): void;
}

interface Developer {
    writeCode(): void;
}


class Sanjay extends Human implements Musician, Developer {
    playMusic(): void {
        console.log("sa re ga ma");
    }
    writeCode(): void {
        console.log("print('Hello World!!!')");
    }
}

class Brendan extends Human implements Engineer, Developer {
    passBEExam(): void {
        console.log("graduate in cs");
    }
    writeCode(): void {
        console.log("Created JAVASCRIPT");
    }
}

const devTeam: Developer[] = [new Sanjay(), new Brendan, /* new Human(), new Animal()*/];

const orchestra: Musician[] = [new Sanjay()];

devTeam.forEach(dev => dev.writeCode());
orchestra.forEach(muscian => muscian.playMusic());