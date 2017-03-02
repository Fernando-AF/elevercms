Router.route('/home',function() {
    this.render('TeacherHome');
});

Router.route('/',function() {
    this.render('login');
});
