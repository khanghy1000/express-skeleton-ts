import express from "express";
import indexController from "../controllers/indexController.ts";

const router = express.Router();

router.get("/", indexController.index);

export default router;
