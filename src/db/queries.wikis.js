const Wiki = require("./models").Wiki;
const User = require("./models").User;

module.exports = {

    getAllWikis(callback){
        return Wiki.findAll()
        .then((wikis) => {
            callback(null, wikis);
        })
        .catch((err) => {
            callback(err);
        })
    },

    addWiki(newWiki, callback){
        return Wiki.create({
            title: newWiki.title,
            body: newWiki.body,
            private: newWiki.private
        })
        .then((wiki) => {
            callback(null, wiki);
        })
        .catch((err) => {
            callback(err);
        })
    }
}