// var manger = {
//     firstName: "Yonatan",
//     lastName:"Itzhak",
//     age:25,
//     salary: 8000
// }

// var worker = {
//     fistName:"Eldad",
//     lastName:"Branho",
//     birthDate:13/5/1999,
//     email:"Eldad@gmail.com",
//     address:{
//         city:"Afula",
//         street:"Alyat Anoyar"
//     }
// }

// var fruit = {
//     fruitName:"Nectarine",
//     fruitColor:"Orange",
//     fruitKind:"Fruit Maply"
// }

// console.log(fruit.fruitName);
// console.log(fruit.fruitColor);
// console.log(fruit.fruitKind);

// var Keita = {
//     classNum:4,
//     classStudent:{
//         studentNum:30,
//         studentName:["Eldad","Yonatan","Yoni","Eld","Itzhak"]
//     }
// }
// for(var i=0;i<Keita.classStudent.studentName.length;i++){
//     document.write(Keita.classStudent.studentName[i]+"<br>");
// }

// var kinderGarten = {
//     teacherName:"Eldad",
//     childrenNum:10,
//     childrenName:["Yonone","Yontwo","Yonthree","Yonfour","Yonfive","Yonsix","Yonseven","Yoneight","Yonnine","Yonten"]
// }
// for(var i=0;i<kinderGarten["childrenName"].length;i++){
//     document.write(kinderGarten["childrenName"][i]+"<br>")
// }
// var keyValue = prompt("Enter key")
// document.write(kinderGarten[keyValue]);

// var myClass = {}
// myClass.myClassNum = +prompt("Enter class number")
// myClass.myClassStudentNum = +prompt("Enter student number")
// myClass.myClassStudentAge = +prompt("Enter student age")
// console.log(myClass);

// var myTeacher ={}
// var myValue = prompt("Enter your value")
// var myKey = "Name"
// myTeacher[myKey] = myValue
// console.log(myTeacher);

// var myManger = {};
// for (var i = 0; i < 4; i++) {
//   var myKey = prompt("Enter your key");
//   var myValue = prompt("Enter your value");
//   myManger[firstName] = myValue;
// }
// console.log(myManger);

// var userProfile = {}
// for(var i=0;i<4;i++){
// var myKey = prompt("Enter your key")
// var myValue = prompt("Enter your value")
// userProfile[myKey] = myValue;
// document.write("<div>"+ userProfile[myKey] + "</div>");
// }

// var carsArray = []
// for(var i=0;i<4;i++){
// var carOne = {
//     model:prompt("Enter car model"),
//     carColor:prompt("Enter your car color"),
//     cubicCentimeter:+prompt("Enter your car cc"),
//     carYear:+prompt("Enter the year of the car")
// }
// document.write("<div>"+ carOne.model + " " + carOne.carColor + " " + carOne.cubicCentimeter + " " + carOne.carYear + "</div>")
// }
// console.log(carsArray);

// function myCatDetail() {
//   for (var i = 0; i < 3; i++) {
//     var cats = {
//       catName: prompt("Enter your cat name"),
//       catDate: prompt("Enter your cat birthdate"),
//       carType: prompt("Enter your cat type"),
//       catWeight: prompt("Enter your car weight"),
//     };
//     document.write("<h1>"+cats.catName+" "+cats.catDate+" "+cats.carType+" "+cats.catWeight+"</h1>")
//   }
// }
// myCatDetail();

// function printDogInfo(usernum){
//     for(i=0;i<usernum;i++){
//         var dogs ={
//             dogName:prompt("Enter your dog name"),
//             dogAge:prompt("Enter your dog age"),
//             dogType:prompt("Enter your dog type"),
//             dogOwner:prompt("Enter the dog owner name")
//         }
//         document.write("<p>"+dogs.dogName+" "+dogs.dogAge+" "+dogs.dogType+" "+dogs.dogOwner+"</p>")
//     }
// }
// printDogInfo(+prompt("Enter how many dogs"))


// function printBugInfo(usernum){
//     for(var i =0;i<usernum;i++){
//         var bug ={
//             bugName:prompt("What the bug name?"),
//             bugScienName:prompt("What is the scientific name of the bug?"),
//             bugWings:prompt("The bug have wings? yes or no"),
//             bugLegs:prompt("The bug have legs? yes or no")
//         }
//         if(bug.bugWings=="yes"){
//          document.write("<h3>"+bug.bugName+" "+bug.bugScienName+" "+bug.bugWings+" "+bug.bugLegs+"</h3>")
//         }
//     }
// }
// printBugInfo(prompt("Enter how many bugs"))

// function printAboveAgeFour(usernumber){
//     for(var i=0;i<usernumber;i++){
// var myObj = {
//     childFullName:prompt("Enter your kid full name"),
//     childAge:+prompt("Enter your child age"),
//     Kindergarten:confirm("Enter if the child in kindergarten? yes or no")
// }
// if(myObj.childAge>4){
// document.write("<p>"+myObj.childFullName+" "+myObj.childAge+" "+myObj.Kindergarten+"</p>")
// }
//     }

// }
// printAboveAgeFour(+prompt("Enter how many children"))

// function printTeachers(teachersNum){
//     for(var i=0;i<teachersNum;i++){
//     var teacher={
//         teacherName:prompt("Enter teacher name"),
//         salary:+prompt("Enter the teacher salary"),
//         email:prompt("Enter the email"),
//         birthdate:prompt("Enter the birthdate")
//     }
//     if(teacher.salary > 100 || teacher.birthdate < 1990){
//         document.write("<span>"+teacher.teacherName+" "+teacher.salary+" "+teacher.email+" "+teacher.birthdate+"</span>"+"<br>")
//     }
// }
// }
// printTeachers(+prompt("Enter how many teachers"))

// function printApartments(apanum){
//     for(var i =0; i<apanum;i++){
//     var myArray = [];
//     var apa ={
//         addrass:prompt("Enter Apartment addrass"),
//         rent:+prompt("Enter the apartment rent price"),
//         price:+prompt("Enter the apartment price"),
//         intrestedPpl:prompt("Enter intrested people"),
//         mediation:confirm("The apartment have mediation")
//     }
//     if(!apa.mediation){
//         document.write("<h3>"+apa.addrass+"</h3>"+"<br>")
//         for(var y =0;y<apa.intrestedPpl.length;y++){
//             document.write(apa.intrestedPpl[y]+"<br>")
//         }
//     }
// }
// }
// printApartments(prompt("How many apartments?"))



