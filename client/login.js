import { Template } from 'meteor/templating';
import './login.jade';

Template.login.onCreated(function () {
    Session.set('registering',false);

});

Template.login.events({
    'click #login-linking' : function(){
        console.log("click!");
        var current = Session.get('registering');
        Session.set('registering',!current)
    },
    'click #logout':function(){
        Meteor.logout();
    }
});

Template.login.helpers({
    'registering' : function(){
        return Session.get('registering');
    },
    'sign_log' : function(){
        var current = Session.get('registering');
        if (current) {
            return "Log in!";
        }else{
            return "Sign up!";
        }
    }
});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=regemail]').val();
        var password = $('[name=regpassword]').val()
        var username = $('[name=regname]').val();
        Accounts.createUser({
          username: username,
          email: email,
          password: password
        });
        var current = Session.get('registering');
        Session.set('registering',!current)
    },
});

Template.sign_in.events({
    'submit form':function(){
        event.preventDefault();
        var email = $('[name=username]').val();
        var password = $('[name=userpassword]').val();
        Meteor.loginWithPassword(email, password);
        Router.go('/home');
    }
});
