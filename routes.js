import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const testBase = '/test'

router.get(testBase + '/client1', (req, res) => {
	res.sendFile(__dirname + '/test/index1.html');
});
router.get(testBase + '/client2', (req, res) => {
	res.sendFile(__dirname + '/test/index2.html');
});

router.get('/index', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

export default router;
