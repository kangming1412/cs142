function Cs142TemplateProcessor(template){
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary){
    var str = this.template;
    for(var key in dictionary){
        var re = new RegExp('\\{\\{' + key + '\\}\\}');
        str = str.replace(re, dictionary[key]);
    }
    str = str.replace(new RegExp('\\{\\{\\w+\\}\\}', "g"), "");
    return str;
}


/*

//testcase:
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);
console.log(str);
//assert(str === 'My favorite month is July but not the day 1 or the year 2016');

//Case2: property doesn't exist in dictionary
var dictionary2 = {day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary2);
console.log(str);
//assert(str === 'My favorite month is  but not the day 1 or the year 2016');

*/