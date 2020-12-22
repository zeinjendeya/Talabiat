const { getRestaurants } = require("../../database/queries/index");

const handleRestaurants = (req, res, next) => {
  getRestaurants()
    .then(({ rows }) => {
      res.status(200).json({ status: 200, data: rows });
    })
    .catch(next);
};

module.exports = handleRestaurants;
