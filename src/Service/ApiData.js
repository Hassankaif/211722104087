import axios from "axios";

export async function getAuthorizationtoken() {
    const clientID = process.env.clientID;
    const clientSecret = process.env.clientSecret;
    cosnst url = process.env.base_URL;

    const res = await axios.get(url + '/auth', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": "manyalihassankaif.2022.cse@ritchennai.edu.in",
            "name": "manyali hassan kaif",
            "rollNo": "211722104087",
            "accessCode": "pTTqxm",
            "clientID": clientID,
            "clientSecret": clientSecret
        })
    });

    if(res.status() === 201){
        return res.access_token;
    }else throw new Error(" error is failed to get access token from the given api");
}

export async function getStocksdata(token) {
  const response = await axios.get("http://20.244.56.144/evaluation-service/stocks", {
    headers: { Authorization: `Bearer ${token}` }
  });


  if (!response.ok) throw new Error("failed to fetch stocks data");
  const data = await response.json();
  return Object.entries(data.stocks).map(([companyName, symbol]) => ({
    companyName,
    symbol
  }));
}