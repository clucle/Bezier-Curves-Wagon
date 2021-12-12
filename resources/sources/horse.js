class Horse {

    constructor() {
        this.img = new Image();
        this.img.src = './resources/images/horse.png';
        this.angle = 0;
        this.x = 0;
        this.y = 0;
        this.keyMap = {
            'ArrowLeft': false,
            'ArrowRight': false,
            'ArrowUp': false
        };
    }

    update(ctx) {
        const angleDiff = 4;
        const speed = 10;

        if (this.keyMap['ArrowLeft'] === true) {
            this.angle -= angleDiff;
        }
        if (this.keyMap['ArrowRight'] === true) {
            horse.angle += angleDiff;
        }
        if (this.keyMap['ArrowUp'] === true) {
            this.y += speed * Math.sin(Math.PI / 180 * this.angle);
            this.x += speed * Math.cos(Math.PI / 180 * this.angle);
        }

        this.draw(ctx);
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x + Horse.width / 2, this.y + Horse.height / 2);
        ctx.rotate(Math.PI / 180 * this.angle);
        ctx.drawImage(
            this.img,
            (-Horse.width) / 2,
            (-Horse.height) / 2,
            Horse.width,
            Horse.height);
        ctx.restore();
    }

    onKeyDown(key) {
        this.keyMap[key] = true;
    }

    onKeyUp(key) {
        this.keyMap[key] = false;
    }

    static get width() { return 54; }
    static get height() { return 54; }
}