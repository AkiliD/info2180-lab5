document.addEventListener("DOMContentLoaded", () => {
    const lookupBtn = document.getElementById("lookup");
    const lookupCitiesBtn = document.getElementById("lookup-cities");
    const countryInput = document.getElementById("country");
    const resultDiv = document.getElementById("result");

    function fetchData(url) {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((data) => {
                resultDiv.innerHTML = data;
            })
            .catch((error) => {
                console.error("Fetch Error:", error);
                resultDiv.innerHTML = "<p>Error retrieving country data.</p>";
            });
    }

    // Country lookup (Exercise 3 / 4)
    lookupBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const country = countryInput.value.trim();
        fetchData(`world.php?country=${encodeURIComponent(country)}`);
    });

    // City lookup (Exercise 5)
    lookupCitiesBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const country = countryInput.value.trim();
        fetchData(`world.php?country=${encodeURIComponent(country)}&lookup=cities`);
    });

    
});