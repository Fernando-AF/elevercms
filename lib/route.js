Router.route('/', function () {
  this.render('home');
});

Router.route('/cms',function() {
    this.render('TeacherHome');
});
