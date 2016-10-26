
function Airport() {
  this.parkedPlanes = [];
}

Airport.prototype.land = function(plane) {
  if (weather.isStormy() = true) {
    throw new Error('cannot land: weather is stormy');
  } else {
    plane.status = true ;
    this.parkedPlanes.push(plane);
  }
}

Airport.prototype.takeOff = function() {
  this.parkedPlanes.pop();
}

var weather = new Weather();
