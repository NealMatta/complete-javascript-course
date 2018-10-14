var john = {
  full_name: "John Johnny",
  mass: 120,
  height: 7,

  calcBMI: function() {
    return this.mass / (this.height * this.height)
  }
};

john.bmi = john.calcBMI();
console.log(john);
