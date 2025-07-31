const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // or "live" for production
  client_id: "YOUR_SANDBOX_CLIENT_ID",
  client_secret: "YOUR_SANDBOX_CLIENT_SECRET",
});

module.exports = paypal;
