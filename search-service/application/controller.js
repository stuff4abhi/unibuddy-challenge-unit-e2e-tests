const getData = require('../repository/get-data')


async function getLogic(req, res){
    const {query, results_length} = req.body;
    // console.log(query, results_length)
    res.json(getData(query, results_length));
}

module.exports = getLogic;
