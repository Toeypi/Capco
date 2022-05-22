module.exports = function (app) {

    app.get('/test', function (req, res) {
        var data = {};
        data.status = 'okay';
        res.status(200).json(data);
    });

    // get
    app.get('/getdata/:type', function (req, res) {
        const fs = require('fs');
        if (req.params.type == "news")
            file = "news.json"
        else if (req.params.type == "region")
            file = "region.json"
        else if (req.params.type == "video")
            file = "video.json"
        else if (req.params.type == "tv")
            file = "tv.json"
        else
            return res.status(500).json("No File")
        var path = require('path').resolve(__dirname, `./data/${file}`)
        let rawdata = fs.readFileSync(path);
        let data = JSON.parse(rawdata);
        res.status(200).json({ data: data })
    })

    // search
    app.post('/searchdata', function (req, res) {
        const fs = require('fs');
        if (req.body.type == "news")
            file = "news.json"
        else if (req.body.type == "region")
            file = "region.json"
        else if (req.body.type == "video")
            file = "video.json"
        else if (req.body.type == "tv")
            file = "tv.json"
        else
            return res.status(500).json("No File")
        var path = require('path').resolve(__dirname, `./data/${file}`)
        let rawdata = fs.readFileSync(path);
        let data = JSON.parse(rawdata);
        data = (data || []).filter(function (item) {
            if (!req.body.text)
                return true
            var regex = new RegExp(`${req.body.text}`, 'i')
            var found = regex.test(item.title)
            if (found)
                return true
            return regex.test(item.description)
        })
        res.status(200).json({ data: data })
    })
}