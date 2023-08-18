const db = require("../models");
const Sejarah = db.sejarah;

exports.getSejarah = async (req, res) => {
  Sejarah.findAll()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving sejarah.",
      })
    );
};

exports.addSejarah = async (req, res) => {
  const body = req.body;
  const sejarah = {
    id: body.id,
    year: Number(body.year),
    textarea: body.textarea,
  };
  Sejarah.create(sejarah)
    .then((data) => res.status(201).send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sejarah.",
      })
    );
};

exports.updateSejarah = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const sejarah = {
    textarea: body.textarea,
    year: Number(body.year),
  };
  Sejarah.update(sejarah, { where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Sejarah was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Sejarah with id=${id}. Maybe Sejarah was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Sejarah with id=" + id,
      });
    });
};

exports.deleteSejarah = async (req, res) => {
  const id = req.params.id;
  Sejarah.destroy({ where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Sejarah was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Sejarah with id=${id}. Maybe Sejarah was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Sejarah with id=" + id,
      });
    });
};
