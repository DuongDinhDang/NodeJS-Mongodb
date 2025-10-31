const express = require("express");
const { getHomePage, getHoiDanItPage, getHoiDanIt } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", (req, res) => {
    res.send("ABC");
});

router.get("/hoidanit", getHoiDanIt);

module.exports = router;
