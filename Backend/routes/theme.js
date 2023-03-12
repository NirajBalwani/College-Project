import express from 'express'
import theme from '../controllers/theme.js';
import multer from 'multer';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path'
import { v4 as uuidv4 } from 'uuid';
import ThemeModel from '../models/Theme.js';
import { verifyUser } from '../services/validate.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/theme')
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post("/create-theme", upload.single('image'), async (req, res) => {
    try {
        const file = req.file.filename;
        const uniqueFilename = uuidv4();
        const uploadedFile = req.file;
        uploadedFile.filename = uniqueFilename;
        fs.renameSync(uploadedFile.path, `uploads/theme/${uploadedFile.filename}` + "." + `${uploadedFile.mimetype}`.split("/")[1]);
        const imagePath = file ? 'uploads/theme/' + uploadedFile.filename + "." + `${uploadedFile.mimetype}`.split("/")[1] : null;
        req.body.image = imagePath
        console.log(req.body)

        const saveImage = await ThemeModel(req.body)
        const saved = await saveImage.save();
        return res.status(201).json({ msg: "Theme Added Successfully ", saved })
    } catch (error) {
        console.log(error);
    }
})

router.put("/update-theme", upload.single('image'), async (req, res) => {
    try {
        const id = req.body.id;
        console.log(id);
        const file = req.file.filename;
        const uniqueFilename = uuidv4();
        const uploadedFile = req.file;
        uploadedFile.filename = uniqueFilename;
        fs.renameSync(uploadedFile.path, `uploads/theme/${uploadedFile.filename}` + "." + `${uploadedFile.mimetype}`.split("/")[1]);
        const imagePath = file ? 'uploads/theme/' + uploadedFile.filename + "." + `${uploadedFile.mimetype}`.split("/")[1] : null;
        req.body.image = imagePath
        console.log(req.body)
        const fileName = req.body.deleteFilePath;
        fs.unlink(fileName, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        }
        )

        const filter = { _id: id };
        const update = {
            $set: {
                image: req.body.image,
                description: req.body.description
            }
        }
        const saveImage = await ThemeModel.updateOne(filter, update)
        return res.status(201).json({ msg: "Theme Added Successfully ", saveImage })
    } catch (error) {
        console.log(error);
    }
})

router.delete("/delete-theme", async (req, res) => {
    try {
        const id = req.body.id;
        const fileName = req.body.deleteFilePath;
        fs.unlink(fileName, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        }
        )
        console.log(id);
        await ThemeModel.findByIdAndDelete(id);
        return res.status(200).json({ msg: "Theme Deleted Successfully" })
    } catch (error) {
        console.log(error);
    }
})

router.put("/update-theme-name", async (req, res) => {
    try {
        console.log(req.body);
        const id = req.body.id;
        const filter = { _id: id };
        const update = {
            $set: {
                name: req.body.name,
                description: req.body.description
            }
        }
        const saveImage = await ThemeModel.updateOne(filter, update)
        console.log(saveImage);
        return res.status(201).json({ msg: "Theme Added Successfully ", saveImage })
    } catch (error) {
        console.log(error);
    }
})

router.get("/allthemes", async (req, res) => {
    try {
        const data = await ThemeModel.find().sort({ updatedAt: 1 });
        return res.status(200).json({ data })
    } catch (error) {
        console.log(error);
    }
})

router.get('/all', async (req, res) => {
    try {
        ThemeModel.find({}).then(data => res.json(data)).catch(err => res.json(err))
    } catch (error) {
        console.log(error);
    }
})

router.get('/fetchOne/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const theme = await ThemeModel.find({ _id: id });
        console.log(theme);
        return res.status(200).json({ theme })
    } catch (error) {
        console.log(error);
    }
})

router.get('/fetch-theme/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const theme = await ThemeModel.findOne({ _id: id })
        console.log(theme);
        return res.status(200).json({ theme })
    } catch (error) {
        console.log(error);
    }
})

export default router;

