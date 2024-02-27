function fullName ( surname ,name, parentName){
    return (surname +" "+name[0] + "."+parentName[0] + ".")
}

console.log(fullName(  "Tabaldieva" ,"Farida", "Ruslanovna"))

const books =(arr)=>{
    let arrWithU = []
    let arrWithoutU =[]
    arr.forEach((item )=>{
            if(item.toLowerCase().includes("u")){
                arrWithU.push(item)
            }else{
                arrWithoutU.push(item)
            }
        }
    )
    console.log("with u : "+arrWithU)
    console.log("without u : "+arrWithoutU)
}
books([ "Ugly dog", 'Little women' , 'Cruel prince' , 'Dune' , 'The ugly' , 'heart uncle' , 'oliver by' , 'pygmalion'])


// const nameDate = [
//     {name: 'Adam', date: 12 march.2019},
//     {name: 'Jack', date: 26},
//     {name: 'Lili', date: 15},
//     {name: 'John', date: 23},
//     {name: 'Willy', date: 17},
//     {name: 'Adam', date: 18},
// ]
// console.log(nameDate)

const nameBirthday = [
    {name: 'Adam', birthday: '12-12-1999'},
    {name: 'Jack', birthday: '10-07-2007'},
    {name: 'Lili', birthday: '24-02-1878'},
    {name: 'John', birthday: '17-04-2005'},
    {name: 'Willy', birthday: '03-11-2000'},
];
nameBirthday.forEach(name => {
    console.log(`Пользователь ${name.name} родился ${name.birthday}`);
});
console.log(nameBirthday)


function isPalindrome(str){
    const string = str.toLowerCase()

    let stringWithoutSpaces = '';
    for (let i = 0; i < string.length; i++){
        if (string[i] !== ' '){
            stringWithoutSpaces += string[i];
        }
    }

    for (let i = 0; i < stringWithoutSpaces.length / 2; i++){
        if (stringWithoutSpaces[i] !== stringWithoutSpaces[stringWithoutSpaces.length - 1 - i]){
            return false;
        }
    }
    return true;
}

// Пример использования:
const userInput = prompt("Введите строку для проверки на палиндром:");
if (isPalindrome(userInput)) {
    alert("Это палиндром!");
} else {
    alert("Это не палиндром.");
}