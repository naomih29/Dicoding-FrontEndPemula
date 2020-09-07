class SearchResult {
    static searchCity(keyword){
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const API_KEY = '72999709abb54266ad40620613b40ad0';
            const nameFormat = keyword.trim().split(' ').join('%20');

            xhr.onload = function() {
                const result = JSON.parse(this.responseText);
                resolve(result);
            }

            xhr.onerror = function() {
                reject('error');
            }

            xhr.open("GET", `https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&location=${nameFormat}`);

            xhr.send();
        })

    }
}

export default SearchResult;