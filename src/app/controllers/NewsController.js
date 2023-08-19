class NewsController {
    index(rep, res) {
        res.render('news');
    }

    show(rep, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController();
