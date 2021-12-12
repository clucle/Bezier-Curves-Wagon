class Horse {

    constructor() {
        this.img = new Image();
        this.img.src = './resources/images/horse.png';
    }

    draw(ctx) {
        ctx.drawImage(this.img, 100, 100);
    }
}