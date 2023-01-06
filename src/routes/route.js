const express = require ('express')
const router = express.Router()
const urlController = require("../controllers/urlController")


router.post("/url/shorten", urlController.urlShorter)
router.get("/:urlCode", urlController.getUrlcode)

router.all("/*", (req,res)=> {
    return res.status(400).send({ status: false, Message: "Invalid URL"})

});

module.exports = router