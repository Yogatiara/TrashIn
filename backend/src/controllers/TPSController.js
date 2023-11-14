import {
  createTPSService,
  deleteTPSService,
  getAllTPSService,
  getTPSByIdService,
  updateTPSService,
} from "../services/TPSServices.js";

const getAllTPS = async (req, res, next) => {
  try {
    const tps = await getAllTPSService();
    res.status(200).json({
      status: "success",
      message: "Get all TPS success",
      data: tps,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getTPSById = async (req, res, next) => {
  try {
    const { withImage, withImageByUser } = req.query;
    const { id } = req.params;
    const tps = await getTPSByIdService(id, withImage);
    res.status(200).json({
      status: "success",
      message: "Get TPS by id success",
      data: tps,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const createTPS = async (req, res, next) => {
  try {
    const tps = await createTPSService(req.body);
    res.status(200).json({
      status: "success",
      message: "Create TPS success",
      data: tps,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
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
    res.status(400).json({
      status: "error",
      message: error.message,
    });
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
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export { getAllTPS, getTPSById, createTPS, updateTPS, deleteTPS };
