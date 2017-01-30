import { Template } from 'meteor/templating';
import './cms.jade';

var up = true;
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

Template.course_information.events({
    'click #toggle' (event, template){
        var item = template.find("#toggle");
        template.$(".infoContent").toggle();
        console.log("Click on toggle");
        if(up){
            item.classList.remove("fa-angle-up");
            item.classList.add("fa-angle-down");
            up = false;
        }else{
            item.classList.remove("fa-angle-down");
            item.classList.add("fa-angle-up");
            up= true;
        }
    },
});
