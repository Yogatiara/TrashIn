import ErrorResponse from "../models/ErrorResponse.js";
import { insertImageService } from "../services/TPSImagesServices.js";
import {
  createTPSService,
  deleteTPSService,
  getAllTPSService,
  getTPSByIdService,
  updateTPSService,
} from "../services/TPSServices.js";

const getAllTPS = async (req, res, next) => {
  const { withImage, withUserFromImage, withUser } = req.query;
  try {
    const tps = await getAllTPSService(withImage, withUserFromImage, withUser);
    res.status(200).json({
      status: "success",
      message: "Get all TPS success",
      data: tps,
    });
  } catch (error) {
    next(error);
  }
};

const getTPSById = async (req, res, next) => {
  try {
    const { withImage, withUserFromImage, withUser, withEvent } = req.query;
    const { id } = req.params;
    const tps = await getTPSByIdService(
      id,
      withImage === "true",
      withUserFromImage === "true",
      withUser === "true",
      withEvent === "true"
    );
    res.status(200).json({
      status: "success",
      message: "Get TPS by id success",
      data: tps,
    });
  } catch (error) {
    next(error);
  }
};

const createTPS = async (req, res, next) => {
  try {
    const tps = await createTPSService(req.body);
    const images = await insertImageService(tps.id, req);
    res.status(200).json({
      status: "success",
      message: "Create TPS success",
      data: {
        tps,
        images,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateTPS = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tps = await updateTPSService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Update TPS success",
      data: tps,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTPS = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tps = await deleteTPSService(id);
    res.status(200).json({
      status: "success",
      message: "Delete TPS success",
      data: tps,
    });
  } catch (error) {
    next(error);
  }
};

const insertTPSImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await insertImageService(id, req);
    res.status(200).json({
      status: "success",
      message: "Insert TPS Image success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export {
  getAllTPS,
  getTPSById,
  createTPS,
  updateTPS,
  deleteTPS,
  insertTPSImage,
};
