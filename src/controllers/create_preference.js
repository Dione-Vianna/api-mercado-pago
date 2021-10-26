const mercadopago = require('mercadopago');
const token = process.env.ACCESS_TOKEN;

mercadopago.configure({
  access_token: token,
});

module.exports = (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: 'http://localhost:5555/success',
      failure: 'http://localhost:5555/failure',
      pending: 'http://localhost:5555/pending',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      res.json({
        id: response.body.id,
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
