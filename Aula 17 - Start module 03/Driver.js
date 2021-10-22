class Driver {
  constructor({ name, age, cpf, hasCar }) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
    this.hasCar = hasCar;
    this.available = true;
  };

  acceptRide(distance, price) {
    if (distance > 10 && price > 20) {
      this.available = false;
      return true
    }
    return false;
  }

  endRide() {
    this.available = true;
  }
};

export default Driver;