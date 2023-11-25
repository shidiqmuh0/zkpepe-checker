async function checkAddresses() {
    // Get addresses from the textarea
    const addressesInput = document.getElementById('addressInput').value;
    const addresses = addressesInput.split(',');

    // Clear previous results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // Perform the API request for each address
    for (const address of addresses) {
        // Use your API to check the address
        try {
            const apiUrl = `https://www.zksyncpepe.com/resources/amounts/${address}.json`;
            const response = await fetch(apiUrl);

            if (response.ok) {
                // Process the data as needed
                const data = await response.json();
                const result = `Address ${address} has data: ${JSON.stringify(data)}`;
                // Display the result
                displayResult(result);
            } else {
                // Handle errors
                const errorResult = `Error checking address ${address}: ${response.status} - ${response.statusText}`;
                displayResult(errorResult);
            }
        } catch (error) {
            // Handle network errors
            const errorResult = `Error checking address ${address}: ${error.message}`;
            displayResult(errorResult);
        }
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML += `<p>${result}</p>`;
}