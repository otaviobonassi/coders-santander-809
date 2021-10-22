// import Driver from "./Driver";

class Uber {
  constructor(Driver, User) {
    this.drivers = [];
  }

  createDriver(driver) {
    const driver = new Driver(driver);
    this.drivers.push(driver);
    return driver
  }

  calculateRidePrice(pointA, pointB) {
    return {
      price: (pointB - pointA)*2,
      distance: (pointB - pointA),
    }
  }
};

export default Uber;