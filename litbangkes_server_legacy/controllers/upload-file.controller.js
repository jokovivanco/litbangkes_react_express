const db = require("../models");
const Files = db.files;
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

const createNewFile = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.send("You must select a file");
    }

    Files.create({
      title: req.body.title,
      filePath: req.file.path,
      fileName: req.body.fileName,
      category: req.body.category,
    }).then((result) => {
      return res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};

const uploadImageAndReplace = async (req, res) => {
  if (req.file == undefined) {
    return res.send(`You must select a file.`);
  }

  const currentImage = await Files.findOne({
    where: { category: req.params.category },
  });

  if (!currentImage) {
    return Files.create({
      title: req.file.originalname,
      filePath: req.file.path,
      fileName: req.file.originalname,
      category: req.body.category,
    }).then((result) => res.send(result));
  }
  // } else {
  await unlinkAsync(currentImage.filePath);
  Files.update(
    {
      title: req.file.originalname,
      filePath: req.file.path,
      fileName: req.file.originalname,
      category: req.body.category,
    },
    { where: { category: req.params.category } }
  ).then(() =>
    res.send({
      title: req.file.originalname,
      filePath: req.file.path,
      fileName: req.file.originalname,
      category: req.body.category,
    })
  );
};

const updateFile = async (req, res) => {
  const id = Number(req.body.id);

  try {
    // get current file
    const currentFile = await Files.findOne({ where: { id } });

    // delete current file in the storage
    await unlinkAsync(currentFile.filePath);
    await Files.update(
      {
        title: req.body.title,
        filePath: req.file.path,
        fileName: req.body.fileName,
      },
      { where: { id } }
    );

    return res.send({ message: "Update file successfully." });
  } catch (error) {
    console.log(error);
  }
};

const updateFileWithoutFile = async (req, res) => {
  const id = Number(req.body.id);

  try {
    await Files.update({ title: req.body.title }, { where: { id } });

    return res.send({ message: "Update file successfully." });
  } catch (error) {
    console.log(error);
  }
};

const getFiles = async (req, res) => {
  const { category } = req.params;
  try {
    const files = await Files.findAll({
      where: { category },
      attributes: ["id", "title", "fileName", "filePath", "category"],
    });
    res.send(files);
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const currentFile = await Files.findOne({ where: { id } });
    await Files.destroy({ where: { id } })
      .then(async (num) => {
        if (num == 1) {
          await unlinkAsync(currentFile.filePath);
          res.send({
            message: "File was deleted successfully!",
            deleted: true,
          });
        } else {
          res.send({
            message: `Cannot delete File with id=${id}. Maybe File was not found!`,
            deleted: false,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete File with id=" + id,
          deleted: false,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNewFile,
  updateFile,
  updateFileWithoutFile,
  getFiles,
  deleteFile,
  uploadImageAndReplace,
};
