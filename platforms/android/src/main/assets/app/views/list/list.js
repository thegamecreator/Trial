var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var viewModule = require("ui/core/view");
var page;

var groceryList = new ObservableArray([
        { name: "eggs" },
        { name: "bread" },
        { name: "cereal" }
    ]);


var pageData = new Observable({
    groceryList: groceryList
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
    return page;
};