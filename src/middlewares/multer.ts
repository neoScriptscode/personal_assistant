import multer from 'multer';
import fs from 'fs';

const uploadDir = 'uploads';

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storageEngine = multer.diskStorage({
    destination: (_, __, cb) => cb(null, uploadDir),
    filename: (_, file, cb) => cb(null, `${Date.now()}--${file.originalname}`),
});

const uploadEngine = multer({ storage: storageEngine });
export default uploadEngine;
