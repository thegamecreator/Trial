var GroceryListViewModel = require("../../shared/view-models/grocery-list-view-model");
// Remove these seven lines of code
var pageData = new Observable({
    groceryList: new ObservableArray([
        { name: "eggs" },
        { name: "bread" },
        { name: "cereal" }
    ])
});

var page;
var groceryList = new GroceryListViewModel([]);
var pageData = new Observable({
    groceryList: groceryList});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;

    groceryList.empty();
    groceryList.load();
};