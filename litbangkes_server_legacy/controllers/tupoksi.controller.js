const db = require("../models");
const Tupoksi = db.tupoksi;

exports.getTupoksi = async (req, res) => {
  Tupoksi.findAll()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tupoksi.",
      })
    );
};

exports.updateTupoksi = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const tupoksi = {
    title: body.title,
    textarea: body.textarea,
  };
  Tupoksi.update(tupoksi, { where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tupoksi was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tupoksi with id=${id}. Maybe Tupoksi was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tupoksi with id=" + id,
      });
    });
};

exports.deleteTupoksi = async (req, res) => {
  const id = req.params.id;
  Tupoksi.destroy({ where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tupoksi was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tupoksi with id=${id}. Maybe Tupoksi was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tupoksi with id=" + id,
      });
    });
};
