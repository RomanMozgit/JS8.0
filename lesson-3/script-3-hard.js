let lang = 'en';
console.log('Через IF');


if (lang == 'ru') {
    console.log(' Понедельник');
    console.log(' Вторник');
    console.log(' Среда');
    console.log(' Четверг');
    console.log(' Пятница');
    console.log(' Суббота');
    console.log(' Воскресенье');
} else {
    console.log(' Monday');
    console.log(' Tuesday');
    console.log(' Wednesday');
    console.log(' Thursday');
    console.log(' Friday');
    console.log(' Friday');
    console.log(' Sunday');
}

console.log('Через Swith');

switch (lang) {
    case 'ru': 
        console.log(' Понедельник');
        console.log(' Вторник');
        console.log(' Среда');
        console.log(' Четверг');
        console.log(' Пятница');
        console.log(' Суббота');
        console.log(' Воскресенье');       
        break;
    default: 
        console.log(' Monday');
        console.log(' Tuesday');
        console.log(' Wednesday');
        console.log(' Thursday');
        console.log(' Friday');
        console.log(' Saturday');
        console.log(' Sunday');  
        break;
}


console.log('Через МНОГОМЕРНЫЙ МАССИВ');

let nameMonth = [
    [' Понедельник',' Вторник',' Среда',' Четверг',' Пятница',' Суббота',' Воскресенье'],
    [' Monday',' Tuesday',' Wednesday',' Thursday',' Friday',' Saturday',' Sunday']
];
let arr = {};
arr = {'ru':nameMonth[0], 'en':nameMonth[1]};
console.log(arr[lang]);


let namePerson = 'Максим';
    namePerson = namePerson == 'Артем' ? "директор": namePerson == "Максим" ?  "преподаватель" : "студент";
  
console.log(namePerson);

