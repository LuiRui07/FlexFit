import BodyPartModel from "../models/BodyPartModel.js";

// GET ALL BODYPARTS
export const getAllParts = async (req, res) => {
  try {
    let Parts = await BodyPartModel.findAll({
      include: [{ all: true, nested: true }],
    });
    if (Parts) {
      return res.json({
        message: `${Parts.length} BodyParts found`,
        data: Parts,
      });
    } else {
      return res.json({
        message: "BodyParts not found",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
};
