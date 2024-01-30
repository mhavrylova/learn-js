let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // повертаємо об'єкт, щоб потім до нього і звернутись
    },
    down() {
        this.step--;
        return this; // повертаємо об'єкт, щоб потім до нього і звернутись
    },
    showStep() {
        console.log( this.step );
        return this; // повертаємо об'єкт, щоб потім до нього і звернутись
    }
};

ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0
