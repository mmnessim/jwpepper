const data = require('../../combined.json');
const dataArray = data.data;

const titleFinder = (title) => {
    let resultsArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].title.toLowerCase() === title.toLowerCase()) {
            resultsArray.push(dataArray[i])
        }
    }
    return resultsArray;
}

const partialMatcher = (title) => {
    let resultsArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].title.toLowerCase().includes(title)) {
            resultsArray.push(dataArray[i])
        }
    }
    console.log(resultsArray)
    return resultsArray;
}

export default function Handler(req, res) {
    var composer = req.query.title
    let result = titleFinder(composer);
    let result2 = partialMatcher(composer);
    if (result.length === 0 && result2.length === 0) {
        res.send({'message': 'No results found'})
    }
    res.send({exact: result, partial: result2});
}