define(function () {
    // function index( callback){
    //     callback();
    //}


    var textfield = function (key,value) {
        return '<div class="properties-entry textfield" data-entry="' + key + '"><label for="' + key + '">' + key + '</label><div class="field-wrapper"><input id="' + key + '" type="text" name="' + key + '" value="' + value + '"></div></div> ';
    };

    var textbox = function (key) {
        return '<div class="properties-entry textbox" data-entry="' + key + '"><label for="' + key + '">' + key + '</label><div class="field-wrapper"><textarea  id="' + key + '"   name="' + key + '"></textarea></div></div>'
    };

    var select = function (key) {
        return '<div class="properties-entry textfield" data-entry="' + key + '"><label for="' + key + '">' + key + '</label><div class="field-wrapper"><select id="' + key + '"   name="' + key + '"><option value=""></option></select></div></div> ';
    };


    return {
        "textfield": textfield,
        "textbox": textbox,
        "select":select
    };
});