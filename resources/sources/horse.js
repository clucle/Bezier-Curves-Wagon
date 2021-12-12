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

        this.wagon = new Wagon(
            this.x - (Horse.width / 2) * Math.cos(Math.radians(this.angle)),
            this.y - (Horse.height / 2) * Math.sin(Math.radians(this.angle))
        );
    }

    update(ctx) {
        const angleDiff = 4;
        const speed = 10;

        const prevTailX = this.tailX;
        const prevTailY = this.tailY;

        let bMove = false;

        if (this.keyMap['ArrowLeft'] === true) {
            this.angle -= angleDiff;
            bMove = true;
        }
        if (this.keyMap['ArrowRight'] === true) {
            horse.angle += angleDiff;
            bMove = true;
        }
        if (this.keyMap['ArrowUp'] === true) {
            this.x += speed * Math.cos(Math.radians(this.angle));
            this.y += speed * Math.sin(Math.radians(this.angle));
            bMove = true;
        }

        if (bMove) {
            this.wagon.update(
                this.x - (Horse.width / 2) * Math.cos(Math.radians(this.angle)),
                this.y - (Horse.height / 2) * Math.sin(Math.radians(this.angle))
            );
        }

        this.wagon.draw(ctx);
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