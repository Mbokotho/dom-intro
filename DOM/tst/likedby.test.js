describe('likedby', function(){

    it('Should count user social media likes.', function(){

assert.equal(likedBy([]), "0 likes");
assert.equal(likedBy(["Liwa", "Lindani"]), "Liked by Liwa and Lindani");
assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa"]), "Liked by Liwa and 2 others");
assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa", "Odwa", "Peter"]), "Liked by Liwa, Lindani and 3 others");

    });




});
