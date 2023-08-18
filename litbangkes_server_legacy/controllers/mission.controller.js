const db = require("../models");
const Mission = db.mission;

exports.getMissions = async (req, res) => {
  Mission.findAll()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving missions.",
      })
    );
};

exports.addMission = async (req, res) => {
  const body = req.body;
  const mission = {
    id: body.id,
    text: body.text,
    vissionId: 1,
  };
  Mission.create(mission)
    .then((data) => res.status(201).send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mission.",
      })
    );
};

exports.updateMission = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const mission = {
    id: body.id,
    text: body.text,
    vissionId: 1,
  };
  Mission.update(mission, { where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Mission was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Mission with id=${id}. Maybe Mission was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Mission with id=" + id,
      });
    });
};

exports.deleteMission = async (req, res) => {
  const id = req.params.id;
  Mission.destroy({ where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Mission was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Mission with id=${id}. Maybe Mission was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Mission with id=" + id,
      });
    });
};
