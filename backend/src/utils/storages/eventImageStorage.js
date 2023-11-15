import { makeStorage } from "../multer.js";

const eventImageStorage = makeStorage("./public/images/event_images");

export default eventImageStorage;
