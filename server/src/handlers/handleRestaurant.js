const { getRestaurant } = require("../../database/queries/index");
const { boomify } = require("../utils/index");

const handleRestaurant = (req, res, next) => {
  getRestaurant(req.params.restaurantID)
    .then(({ rows, rowCount }) => {
      if (rowCount === 0) {
        next(boomify(404, " restaurant not found"));
      } else {
        res.status(200).json({ status: 200, data: rows[0] });
      }
    })
    .catch(next);
};

module.exports = handleRestaurant;
