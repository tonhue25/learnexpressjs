const Db = require('../../config/db');
class SiteController {
    index(rep, res) {
        Db.getEmployees().then((employee) => {
            res.json(employee[0]);
        });
        //res.render('home');
    }
    search(rep, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
