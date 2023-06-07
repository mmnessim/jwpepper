const data = require('../../combined.json')
const dataArray = data.data;

const levelFinder = (level) => {
    let resultsArray = [];
    for (let i = 0; i < dataArray.length; i ++) {
        if (dataArray[i].level === level) {
         resultsArray.push(dataArray[i]);   
        }
    }
    return resultsArray;
}

export default function Hanlder(req, res) {
    let level = req.query.level;
    let result = levelFinder(level);
    if (result.length === 0) {
        res.send({message: "No results found"})
    }
    res.send(result)
}