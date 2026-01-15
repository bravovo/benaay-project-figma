const { Router } = require("express");

const { postLogin } = require("../controllers/auth.controller");

const router = Router();

router.post("/login", postLogin);

module.exports = router;
