import express from 'express'
import controllers from '../controllers/index.js'

const router = express.Router()

router
    .route('/')
    // .get(controllers.getAllRows)
    .get(controllers.getRow)
    .post(controllers.createRow)
    .delete(controllers.deleteRow)


router
    .route('/:id')
//     .get(controllers.getRow)
//     .put(controllers.updateRow)
    // .delete(controllers.deleteRow)

export default router