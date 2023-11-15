import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const makeDiskStorage = (dest) =>
  multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, dest ? dest : "public/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + "." + file.mimetype.split("/").reverse()[0]);
    },
  });

const makeStorage = (dest) => {
  const storage = makeDiskStorage(dest);
  return multer({ storage });
};

export { makeStorage };
