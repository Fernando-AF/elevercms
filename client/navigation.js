import { Template } from 'meteor/templating';
import './navigation.jade';

document.title = "EleverApp"

Template.navigationBar.helpers({
  today() {
    return "January 9th, 2017";
  }
});

Template.navigationBar.helpers({
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
