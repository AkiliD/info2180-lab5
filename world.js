document.addEventListener("DOMContentLoaded", () => {
    const lookupBtn = document.getElementById("lookup");
    const countryInput = document.getElementById("country");
    const resultDiv = document.getElementById("result");

    lookupBtn.addEventListener("click", (event) => {
        event.preventDefault();

        // Get and clean up the input value
        const query = countryInput ? countryInput.value.trim() : "";
        const url = `world.php?country=${encodeURIComponent(query)}`;

        // Open an AJAX request using the Fetch API
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((data) => {
                // Insert the returned HTML/text into the result container
                resultDiv.innerHTML = data;
            })
            .catch((error) => {
                console.error("Fetch Error:", error);
                resultDiv.innerHTML = "<p>Error retrieving country data.</p>";
            });
    });
});