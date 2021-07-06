const cookieParser = require("cookie-parser");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
router.get("/index.html", function (req, res, next) {
    res.render("index", { title: "Express" });
});

/* GET about page. */
router.get("/about.html", function (req, res, next) {
    res.render("about", { title: "Express" });
});

/* GET contact page. */
router.get("/contact.html", function (req, res, next) {
    res.render("contact", { title: "Express" });
});

/* GET post page. */
router.get("/post.html", function (req, res, next) {
    res.render("post", { title: "Express" });
});

// parameter in router
// giua cac parameter co the phan cach bang ki tu . / -  nhung khong duoc dung dau cach
router.get("/gia-san-pham/:ten.:gia", function (req, res, next) {
    res.send("Ten san pham la: " + req.params.ten + " gia :" + req.params.gia);
});

//router use regular expression
router.get("/fe(du)?vn", function (req, res, next) {
    res.send("router use regular expression ? ");
});

router.get("/zing*vn", function (req, res, next) {
    res.send("router use regular expression *");
});

router.get("/*.:Code", function (req, res, next) {
    res.send("Mã Code :" + req.params.Code);
});

//use cookies- a temp memory
router.get("/sua-dau-nanh/:sdt", function (req, res, next) {
    res.cookie("dt", req.params.sdt);
    res.send("Order sua dau nanh lien he: " + req.params.sdt);
});

router.get("/sua-dau-xanh", function (req, res, next) {
    res.send("Order sua dau xanh lien he: " + req.cookies.dt);
});

router.get("/xoa-cookie", function (req, res, next) {
    res.clearCookie("dt");
    res.send("xoa cookie");
});

//session: do bao mat cao hon cookies, do co ma hoa
router.get("/tao-session", function (req, res, next) {
    req.session.manga = "tham tu lung danh Conna";
    res.send("da tao session");
});

router.get("/lay-session", function (req, res, next) {
    res.send("lay tao session , mangga: " + req.session.manga);
});

router.get("/xoa-session", function (req, res, next) {
    req.session.destroy(function (err) {
        console.log(err);
    });
    res.send("da xoa session");
});

module.exports = router;
