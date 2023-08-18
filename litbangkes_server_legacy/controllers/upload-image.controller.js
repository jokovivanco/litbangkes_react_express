const db = require("../models");
const StrukturOrganisasi = db.strukturOrganisasi;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file.path);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    const currentFile = await StrukturOrganisasi.findOne({
      where: { id: 1 },
    });

    // if current file doesn't exist then create new one
    if (!currentFile) {
      try {
        StrukturOrganisasi.create({
          name: req.file.originalname,
          file: req.file.path,
          category: "struktur-organisasi",
        }).then((result) => {
          return res.send(result);
        });
      } catch (error) {
        console.log(error);
      }
    }

    // if file exist, update current file
    try {
      StrukturOrganisasi.update(
        {
          name: req.file.originalname,
          file: req.file.path,
          category: "struktur-organisasi",
        },
        { where: { category: "struktur-organisasi" } }
      ).then(() => {
        return res.send({
          name: req.file.originalname,
          file: req.file.path,
          category: "struktur-organisasi",
        });
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

const getImage = async (req, res) => {
  StrukturOrganisasi.findOne({
    where: { category: "struktur-organisasi" },
  }).then((result) => {
    res.send(result);
  });
};

module.exports = {
  uploadFiles,
  getImage,
};
