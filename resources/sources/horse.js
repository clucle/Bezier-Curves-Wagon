class Horse {

    constructor(x, y) {
        this.img = new Image();
        this.img.src = './resources/images/horse.png';
        this.angle = 0;
        this.x = x;
        this.y = y;
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
            this.x += speed * Math.cos(Math.PI / 180 * this.angle);
            this.y += speed * Math.sin(Math.PI / 180 * this.angle);
        }

        this.draw(ctx);
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / 180 * this.angle);
        ctx.drawImage(
            this.img,
            (-Horse.width) / 2,
            (-Horse.height) / 2,
            Horse.width,
            Horse.height);
        ctx.restore();

        const x = this.x - (Horse.width / 2) * Math.cos(Math.PI / 180 * this.angle);
        const y = this.y - (Horse.height / 2) * Math.sin(Math.PI / 180 * this.angle);
        ctx.strokeStyle = "#c82124"; //red
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
        ctx.stroke();
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