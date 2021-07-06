var express = require("express");
var router = express.Router();

// sẽ tự nhận đường dẫn fashion
router.get("/chau-a.chn", function (req, res, next) {
    res.send("Đây là chuyên mục fashion châu á");
});

router.get("/chau-au-my.chn", function (req, res, next) {
    res.send("Đây là chuyên mục fashion châu âu mỹ");
});

router.get("/gioi-tre.chn", function (req, res, next) {
    res.send("Đây là chuyên mục fashion giới trẻ");
});

module.exports = router;
