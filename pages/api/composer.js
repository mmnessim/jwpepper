const data = require('../../combined.json');
const dataArray = data.data;

const composerFinder = (composer) => {
    let resultsArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].composer.toLowerCase() === composer.toLowerCase()) {
            resultsArray.push(dataArray[i])
        }
    }
    return resultsArray;
}

const partialMatcher = (composer) => {
    let resultsArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].composer.toLowerCase().includes(composer)) {
            resultsArray.push(dataArray[i])
        }
    }
    console.log(resultsArray)
    return resultsArray;
}

export default function Handler(req, res) {
    var composer = req.query.composer
    let result = composerFinder(composer);
    let result2 = partialMatcher(composer);
    if (result.length === 0 && result2.length === 0) {
        res.send({'message': 'No results found'})
    }
    res.send({exact: result, partial: result2});
}