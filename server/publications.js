Meteor.publish('posts', function() {
    return Posts.find();
});

Meteor.publish('allPosts', function() {
    return Posts.find();
});

Meteor.publish('comments', function() {
    return Comments.find();
});