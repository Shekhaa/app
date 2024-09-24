let arr = [];

async function api() {
  const url = "https://covid-19-statistics.p.rapidapi.com/provinces?iso=CHN";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6eb69c2aa1mshddf27456becc191p108768jsn5185fd3a034a",
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    arr = result;
  } catch (error) {
    console.error(error);
  }
}
api();
