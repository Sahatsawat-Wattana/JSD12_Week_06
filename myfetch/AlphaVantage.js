const context = "TIME_SERIES_DAILY";
const apiKey = "XAT3H1DPZI5ETSAV";
const symbol = "IBM";

function callStock(context, symbol, apiKey) {
  const url = `https://www.alphavantage.co/query?function=${context}&symbol=${symbol}&apikey=${apiKey}`;
  const option = { headers: { "User-Agent": "request" } };

  return fetch(url,option).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  }).then((data) => {console.log(data)})
  .catch((error) => {
      console.error(error);
    });
}

callStock(context,symbol,apiKey)