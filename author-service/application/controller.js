const getData = require('../repository/get-data')

async function getLogic(req, res) {
    const {book_id} = req.body;
    res.json(await getData(book_id));
}

module.exports = getLogic;
