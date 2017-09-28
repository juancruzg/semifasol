const express = require("express");
const UserController = require("./user.controller.js");

const router = express.Router();

let controller = new UserController();

router.get("/", (req, res) => controller.getAll(req, res));
router.get("/session", (req, res) => controller.session(req, res));
router.get("/search", (req, res) => controller.getSome(req, res));
router.get("/:username", (req, res) => controller.getUser(req, res));

router.post("/", (req, res) => controller.updateUser(req, res));
router.post("/login", (req, res) => controller.login(req, res));
router.post("/addRelationship", (req, res) => controller.addRelationship(req, res));
router.post("/addRelationship/:from/:to", (req, res) => controller.addRelationship(req, res));

router.put("/", (req, res) => controller.insertUser(req, res));

module.exports = router;
