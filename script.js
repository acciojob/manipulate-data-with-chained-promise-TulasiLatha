//your JS code here. If required.
function fetchNumbers() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    resolve(numbers);
                }, 3000);
            });
        }

        // Function to filter out odd numbers
        function filterOddNumbers(numbers) {
            return new Promise((resolve) => {
                const evenNumbers = numbers.filter((num) => num % 2 === 0);
                resolve(evenNumbers);
            });
        }

        // Function to multiply even numbers by 2
        function multiplyByTwo(numbers) {
            return new Promise((resolve) => {
                const doubledNumbers = numbers.map((num) => num * 2);
                resolve(doubledNumbers);
            });
        }

        // Function to update the HTML element with the final result
        function updateOutput(result) {
            const outputElement = document.getElementById("output");
            outputElement.textContent = result.join(', ');
        }

        // Chain the promises
       document.addEventListener("DOMContentLoaded", function () {
		   fetchNumbers()
            .then(filterOddNumbers)
            .then(multiplyByTwo)
            .then(updateOutput)
            .catch((error) => {
                console.error(error);
            });
	   })
    
