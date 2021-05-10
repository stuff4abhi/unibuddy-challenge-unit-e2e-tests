const source = require('./data.json');

source.summaries.forEach((summaryObject) => {
    let {id,summary} = summaryObject;
    let summaryLower = summary.toLowerCase();
    summaryLower = summaryLower.replace("The Book in Three Sentences:", "");
    summaryObject.relevance = {}
    summaryLower.split(" ").forEach(key => {
        if(key){
            key = key.replace(/[\W_]+/g, '');
            const reg = new RegExp(key, 'g')
            const matches = summaryLower.match(reg);
            if(!summaryObject.relevance[key])
                summaryObject.relevance[key] = matches ? matches.length : 0;
        }
    });
});

function getData(input, k){
    const words = input.toLowerCase().split(" ");
    let matchedSummaries = [];
    source.summaries.forEach(({id,summary, relevance}) => {
        const value = words.reduce((agg, word) => {
            if(relevance[word] > 0)
                agg += relevance[word];
            return agg;
        }, 0);
        if(value > 0)
            matchedSummaries.push({id, summary, relvance: value, title: source.titles[id]});
    }, []);
    matchedSummaries.sort((a,b) => {
        if(a.relvance < b.relvance)
            return 1;
        return -1;
    });
    return k > matchedSummaries.length ? matchedSummaries : matchedSummaries.slice(0, k);
}

module.exports = getData;
