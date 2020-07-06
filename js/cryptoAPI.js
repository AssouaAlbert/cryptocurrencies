class CryptoAPI{
    constructor(){

    }
    async queryAPI(currency, crypto){
        // Query the url
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${crypto}/?convert=${currency}`);
        // Return as json
        const result = await url.json();
        console.log('result: ', result);
        
        // return  the response
        return {
            result
        }
    }
    async getCrytoCurrencies(){
        const url = await this.request("https://api.coinmarketcap.com/v1/ticker/");
        // const url = await this.request('GET', "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=53d95d9b-6074-4713-b323-8592222241e4");
        return JSON.parse(url.target.responseText);
        // const cryptoCurrencies = await JSON.parse(url.responseText);
    }

    // async request (url) {
    //     const response = await fetch(url).then(response =>  response.json());

    // }

    request(method, url){
        return new Promise((resolve,reject)=>{;
            const xhr = new XMLHttpRequest();
            xhr.open(method, url,true);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        })
    }
}