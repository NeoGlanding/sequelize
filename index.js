const express = require('express');

const app = express();
const db = require('./models');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', async (req, res) => {
    const seq = await db.Seq.findAll();
    res.send(seq)
});

app.post('/', async (req, res) => {
    const data = await db.Seq.create(req.body);
    res.send(data)
});

app.get('/:id', async (req, res) => {
    const data = await db.Seq.findAll({
        where: {
            id: req.params.id
        }
    });
    res.send(data);
});

app.delete('/:id', async (req, res) => {
    await db.Seq.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send('success')
});

app.patch('/:id', async (req, res) => {
    await db.Seq.update({
        text: req.body.text
    }, {
        where: {
            id: req.params.id
        }
    });

    res.send('success')
})

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('server started')
    })
})