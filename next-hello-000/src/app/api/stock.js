const StockFetch = async (id) => {
  // const url = "https://openapivts.koreainvestment.com:29443/oauth2/tokenP";
  const url = "/oauth2/tokenP"

  const res = await fetch(url);
  const json = await res.json();
};
