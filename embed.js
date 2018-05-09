var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts:[postSchema]
});

var User = mongoose.model("User", userSchema)




// var newUser = new User({
//   email: 'hermione@hagword.edu',
//   name: "Hermione Granger"
// });

// newUser.posts.push({
//   title:"How to brew potion",
//   content: "Just kidding, go to class"
//   });


// newUser.save(function(err, user){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Reflections on Appples",
//   content: "They are elicious"
// });

// newPost.save(function(err, post){
//   if(err){
//      console.log(err);
//   }else{
//      console.log(post);
//    }
//  });

User.findOne({name: "Hermione Granger"}, function(err, user){
  if(err){
   //console.log(err);
  }else{
    user.posts.push({
      title: "Three things I hate",
      content: "Valdemore, Voldemore, Voldemore"
    });
   user.save(function(err, user){
    if(err){
      console.log(err);

    }else{
      console.log(user);
    }
   })
  }
});