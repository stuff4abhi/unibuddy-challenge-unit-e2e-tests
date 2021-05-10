const getAuthorData = require('../repository/get-author-data');
const getSummaryData = require('../repository/get-summary-data')

async function getLogic(req, res){
    const {queries, results_length} = req.body;
    const bookIds = []
    const results = [];
    const summary_promises = queries.map(query => {
        return getSummaryData(query, Number(results_length));
    })
    const summary_data = await Promise.all(summary_promises);
    summary_data.forEach((response, idx) => {
        if(response){
            response.reduce((agg, i) => {
                agg.push(i.id);
                return agg;
            }, bookIds);
            response.forEach(i => {
                i.query = queries[idx]
            })
            results.push(response);
        }
    });
    const author_promises = bookIds.map(bookId => {
        return getAuthorData(bookId);
    })
    const author_data = await Promise.all(author_promises);
    const authorMap = author_data.reduce((agg, authorData) => {
        agg[authorData.id] = authorData.author;
        return agg;
    },{});
    results.forEach(queryResult => {
        queryResult.forEach(result => {
            result.author = authorMap[result.id];
        });
    });
    res.json(results);
}

module.exports = getLogic;
