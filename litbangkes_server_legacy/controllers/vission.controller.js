const db = require("../models");
const Vission = db.vission;

exports.getVission = async (req, res) => {
  Vission.findOne({ where: { id: 1 } })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving vission.",
      })
    );
};

exports.updateVission = async (req, res) => {
  const body = req.body;
  const vission = {
    text: body.text,
  };
  Vission.update(vission, { where: { id: 1 }, returning: true })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vission was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Vission with id=${1}. Maybe Vission was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Vission with id=" + 1,
      });
    });
};
