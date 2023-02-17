function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('butter');
      }, 2000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('cold drinks');
      }, 1000);
    });
  }
  
  getButter()
    .then((butter) => {
      console.log(`Husband got ${butter}`);
      return getColdDrinks();
    })
    .then((drinks) => {
      console.log(`Husband got ${drinks}`);
    })
    .catch((error) => {
      console.error(error);
    });
  