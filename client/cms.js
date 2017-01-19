import { Template } from 'meteor/templating';
import './cms.jade';

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

Template.sidemenuItem.helpers({
  Qcourses() {
    return "2";
  }
});

Template.course.helpers({
  coursename() {
    return "Física 2";
  }
});
