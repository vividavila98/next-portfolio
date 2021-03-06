import axios from "axios";

function getRequestParams(email) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const LIST_ID = process.env.REACT_APP_AUDIENCE_ID;
  const DATACENTER = process.env.REACT_APP_API_SERVER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed"
  }

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers
  };
}

const checkEmail = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Add your email please."
    })
  }

  try {
    const { url, data, headers } = getRequestParams(email);
    const response = await axios.post(url, data, { headers });

    return res.status(201).json({error: null});
  } catch (e) {
    return res.status(400).json({error: "Something went wrong."});
  }
};

export default checkEmail;