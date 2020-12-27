const {
  getMenu,
  getMeal,
  getSideDish,
  getDrink,
  getDessert,
  getRestaurant,
} = require("../../database/queries/index");
const { boomify } = require("../utils/index");

const handleMenu = (req, res, next) => {
  getRestaurant(req.params.restaurantID)
    .then(({ rows, rowCount }) => {
      if (!req.cookies.token) {
        throw boomify(401, " not authorized");
      } else if (rowCount === 0) {
        throw boomify(404, " restaurant not found");
      } else {
        getMenu(rows[0].id)
          .then(({ rows, rowCount }) => {
            const food = {};
            getMeal(rows[0].id)
              .then(({ rows }) => {
                food.meal = rows;
              })
              .then(() => {
                getSideDish(rows[0].id).then(({ rows }) => {
                  food.sideDishes = rows;
                });
              })
              .then(() => {
                getDessert(rows[0].id).then(({ rows }) => {
                  food.desserts = rows;
                });
              })
              .then(() => {
                getDrink(rows[0].id).then(({ rows }) => {
                  food.drinks = rows;
                  res.status(200).json({ status: 200, data: food });
                });
              })
              .catch(next);
          })
          .catch(next);
      }
    })
    .catch(next);
};

module.exports = handleMenu;
