import { Template } from 'meteor/templating';
import './navigation.jade';

document.title = "EleverApp"

Template.date.helpers({
  today() {
    return "January 9th, 2017";
  }
});

Template.user.helpers({
  uID() {
    return "MC";
  },
  username() {
    return "Prof. Edgar Lopez";
  },
  status() {
    return "Elever";
  }
});
