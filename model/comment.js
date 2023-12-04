const { strict } = require('assert');
var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    topicid: String,
    articleId: String,
    comments: String,
    userName: String,
    userid: String,
    commentTime: String,
    commentStatus: Number
});
var comment = mongoose.model("comment", commentSchema);

module.exports = comment;