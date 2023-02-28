const express = require('express')
const router = express.Router()

//controller call
const categoryController = require('./../../controller/admin/category')
const { multer, storage } = require("./../../services/multerConfig")
const upload = multer({ storage: storage }) // file handles

// router.use(upload)
router.post('/add-category',  upload.single('image') ,categoryController.postCategory)
// router.post('/add-category',  upload.array('image') ,categoryController.postCategory) // it allows us to use upload multiple files.

router.post('/update-category/:id', categoryController.updateCategory)
router.get('/category', categoryController.getCategory)

router.get('/single-category/:id', categoryController.getSingleCatgeory)
router.get('/delete-category/:id', categoryController.categoryDelete)

module.exports = router

