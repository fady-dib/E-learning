const File = require("../models/fileModel.js")
const multer = require("multer");

exports.uploadFile = async (req,res) => {

    const storage = new GridFsStorage({
        url: process.env.DB_URL,
        file: (req, file) => {
            return new Promise((resolve, reject) => {
                const filename = file.originalname;
                const fileInfo = {
                  filename: filename,
                  bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
          }
      });

      const upload = multer({
        storage,
      });

      try{

    const file = new File({
        name: req.file.originalname,
        data: req.file.buffer,
        // contentType: req.file.mimetype
    })


    await file.save();
    res.json({ message: 'File uploaded successfully' });
}
catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error uploading file' });
  }
}

