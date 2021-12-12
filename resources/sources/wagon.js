class Wagon {

    constructor(headX, headY) {
        this.img = new Image();
        this.img.src = './resources/images/wagon.png';
        this.headX = headX;
        this.headY = headY;
        this.tailX = headX - (Wagon.bezierDistance / 2);
        this.tailY = headY;
    }

    update(headX, headY) {
        const distance = Math.sqrt(
            (this.headX - headX) * (this.headX - headX) +
            (this.headY - headY) * (this.headY - headY));

        const P0 = { 'x': this.tailX, 'y': this.tailY };
        const P1 = { 'x': this.headX, 'y': this.headY };
        const P2 = {
            'x': this.headX + (headX - this.headX) / distance * Wagon.bezierDistance,
            'y': this.headY + (headY - this.headY) / distance * Wagon.bezierDistance
        };

        const t = distance / Wagon.bezierDistance;

        const bezier = Math.bezier2D(P0, P1, P2, t);

        if (!Number.isNaN(bezier.x) && !Number.isNaN(bezier.y)) {
            this.tailX = bezier.x;
            this.tailY = bezier.y;
        }

        this.headX = headX;
        this.headY = headY;
    }

    draw(ctx) {
        const angle = Math.atan2(this.headY - this.tailY, this.headX - this.tailX);

        ctx.save();
        ctx.translate(this.tailX, this.tailY);
        ctx.rotate(angle);
        ctx.drawImage(
            this.img,
            (-Wagon.width) / 2,
            (-Wagon.height) / 2,
            Wagon.width,
            Wagon.height);
        ctx.restore();
    }

    static get width() { return 54; }
    static get height() { return 54; }
    static get bezierDistance() { return 54; }
}