class Wagon {

    constructor(headX, headY) {
        this.img = new Image();
        this.img.src = './resources/images/wagon.png';
        this.headX = headX;
        this.headY = headY;
        this.tailX = headX - Wagon.bezierDistance;
        this.tailY = headY;
    }

    update(headX, headY) {
        const distance = Math.sqrt(
            (this.headX - headX) * (this.headX - headX) +
            (this.headY - headY) * (this.headY - headY));

        const P0 = { 'x': this.tailX, 'y': this.tailY };
        const P1 = { 'x': this.headX, 'y': this.headY };
        const P2 = {
            'x': this.headX + (headX - this.headX) / distance * 128,
            'y': this.headY + (headY - this.headY) / distance * 128
        };

        const t = distance / 128;

        const bezier = Math.bezier2D(P0, P1, P2, t);

        this.tailX = bezier.x;
        this.tailY = bezier.y;

        this.headX = headX;
        this.headY = headY;
    }

    draw(ctx) {
        ctx.strokeStyle = "#c82124"; //red
        ctx.beginPath();
        ctx.arc(this.headX, this.headY, 1, 0, 2 * Math.PI, true);
        ctx.stroke();

        ctx.strokeStyle = "#21c824"; //green
        ctx.beginPath();
        ctx.arc(this.tailX, this.tailY, 1, 0, 2 * Math.PI, true);
        ctx.stroke();
    }


    static get width() { return 54; }
    static get height() { return 54; }
    static get bezierDistance() { return 128; }
}