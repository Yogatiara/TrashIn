import { makeStorage } from "../multer.js";

const tpsStorage = makeStorage("./public/images/tps_images");

export default tpsStorage;