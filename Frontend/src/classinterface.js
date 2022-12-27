"use strict";
class Animal {
    eat() { console.log("kha lo kha lo"); }
    sleep() { }
    procreate() { }
}
class Human extends Animal {
}
class Sanjay extends Human {
    playMusic() {
        console.log("sa re ga ma");
    }
    writeCode() {
        console.log("print('Hello World!!')");
    }
}
class Brendan extends Human {
    passBEExam() {
        console.log("graduate in cs");
    }
    writeCode() {
        console.log("Created JAVASCRIPT");
    }
}
const devTeam = [new Sanjay(), new Brendan, /* new Human(), new Animal()*/];
const orchestra = [new Sanjay()];
devTeam.forEach(dev => dev.writeCode());
orchestra.forEach(muscian => muscian.playMusic());
