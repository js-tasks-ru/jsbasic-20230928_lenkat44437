let calculator = {
  massive: {}, 
  read (a, b) {
    return this.massive = {a, b}; 
  },
  sum () {
    let sum = 0;
    for (let key in this.massive) {
      sum += this.massive[key];
    }
    return sum;
  },
  mul () {
    let mul = 1;
    for (let key in this.massive) {
      mul *= this.massive[key];
    }
    return mul;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
