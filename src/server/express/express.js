import path from 'path';
import axios from 'axios';

export default function(app) {
    app.get('/', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, '../../../dist/client/index.html'),
        );
    });
    app.post('/darksky', (req, res) => {
        const API = '5f6741e4aa49b0e8dc3461385580d6f4';
        const lat = req.body.lat;
        const lng = req.body.lng;
        const url = `https://api.darksky.net/forecast/${API}/${lat},${lng}`;
        axios
            .get(url, {
                params: {
                    units: 'si',
                },
            })
            .then(response => res.json(response.data))
            .catch(error => res.json({
                error
            }));
    });
    app.get('*', (req, res) => {
        res.status(404).send('Not Found');
    });
}