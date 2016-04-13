var frameModule=require("ui/frame");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();
var dialogsModule = require("ui/dialogs");
var email;

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    //email = viewModule.getViewById(page, "email");
    console.log(email);
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function(res) {
            console.log(JSON.stringify(res));
            var lo=frameModule.topmost()
            lo.navigate("views/list/list");
        });
};
exports.register = function() {
     var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};