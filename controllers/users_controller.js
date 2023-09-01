const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'Profile'
    });
};

// render the signUp page
module.exports.signUp = function(req, res){
    return res.render("user_sign_up",{
        title: "Issue Tracker | Sign Up"
    });
};

// reder the signIn page
module.exports.signIn = function(req, res){
    return res.render("user_sign_in",{
        title: "Issue Tracker | Sign In"
    });
};

//get the sign up data
// get the sign up data
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect('back');
    }
  
    User.findOne({ email: req.body.email })
      .then(function (user) {
        if (!user) {
          // If there is no such a user, then create one and save it to the database
          return User.create(req.body)
            .then(function (user) {
              return res.redirect('/users/sign-in');
            })
            .catch(function (err) {
              console.log('Error in creating user while signing up', err);
              return res.redirect('back');
            });
        } else {
          return res.redirect('back');
        }
      })
      .catch(function (err) {
        console.log('Error in finding user in signing up', err);
        return res.redirect('back');
      });
  };
  

// get the login details from user and authenticate them
module.exports.createSession = function(req,res){
    // Todo later
};
