Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

Math.bezier2D = function(P0, P1, P2, t) {
    if (t < 0) t = 0;
    if (t > 1) t = 1;

    const x = (1 - t) * (1 - t) * P0.x + 2 * (1 - t) * t * P1.x + t * t * P2.x;
    const y = (1 - t) * (1 - t) * P0.y + 2 * (1 - t) * t * P1.y + t * t * P2.y;

    return { 'x': x, 'y': y };
}