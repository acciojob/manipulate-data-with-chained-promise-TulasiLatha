const output = document.getElementById("output");

function processNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers);
    }, 3000);
  });
}

const input = [1, 2, 3, 4];

processNumbers(input)
  .then((numbers) => {
    const filteredNumbers = numbers.filter((number) => number % 2 === 0);
    output.textContent = `${filteredNumbers}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredNumbers);
      }, 1000);
    });
  })
  .then((filteredNumbers) => {
    const multipliedNumbers = filteredNumbers.map(
      (number) => (number *= 2)
    );
    output.textContent = `${multipliedNumbers}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch((error) => console.error(error));
