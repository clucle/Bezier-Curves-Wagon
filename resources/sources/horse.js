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
        this.updateTail();

        this.wagonX = this.tailX - 128;
        this.wagonY = this.tailY;
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
            this.updateTail();
            this.updateWagon(prevTailX, prevTailY);
        }

        this.draw(ctx);
    }

    updateTail() {
        this.tailX = this.x - (Horse.width / 2) * Math.cos(Math.radians(this.angle));
        this.tailY = this.y - (Horse.height / 2) * Math.sin(Math.radians(this.angle));
    }

    updateWagon(prevTailX, prevTailY) {

        const distance = Math.sqrt(
            (prevTailX - this.tailX) * (prevTailX - this.tailX) +
            (prevTailY - this.tailY) * (prevTailY - this.tailY));

        const P0 = { 'x': this.wagonX, 'y': this.wagonY };
        const P1 = { 'x': prevTailX, 'y': prevTailY };
        const P2 = {
            'x': prevTailX + (this.tailX - prevTailX) / distance * 128,
            'y': prevTailY + (this.tailY - prevTailY) / distance * 128
        };

        const t = distance / 128;

        const bezier = Math.bezier2D(P0, P1, P2, t);

        console.log(P0, P1, P2, t, bezier);

        this.wagonX = bezier.x;
        this.wagonY = bezier.y;
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

        ctx.strokeStyle = "#c82124"; //red
        ctx.beginPath();
        ctx.arc(this.tailX, this.tailY, 1, 0, 2 * Math.PI, true);
        ctx.stroke();

        ctx.strokeStyle = "#21c824"; //green
        ctx.beginPath();
        ctx.arc(this.wagonX, this.wagonY, 1, 0, 2 * Math.PI, true);
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