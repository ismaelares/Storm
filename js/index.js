var image = document.getElementById('image');
image.onload = function() {
  var engine = new RainyDay({
    image: this,
    gravityAngle: Math.PI / 5

  });
  engine.trail = engine.TRAIL_SMUDGE;
  engine.rain([ [3, 2, 2] ], 100);
  engine.rain(
    [
        [1, 0, 20], 
        [3, 3, 1],
        [1, 2, 19]
    ],                       
    100);
 // engine.rain([ [0, 2, 200], [3, 3, 1] ], 100);
};
image.crossOrigin = 'anonymous';
