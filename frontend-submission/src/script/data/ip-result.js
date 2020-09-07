class IpResult{
    static getFromIP(){
        const API_KEY = '72999709abb54266ad40620613b40ad0';
        return fetch(`https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                if(responseJSON.location.country_name){
                    return Promise.resolve(responseJSON);
                }else{
                    return Promise.reject(`Error!`);
                }
            })
    }
}

export default IpResult;