//الف
function Lesson(className,classUnit,classCapicity){
        this.className=className
        this.classUnit=classUnit
        this.classCapicity=classCapicity
}
let softEngineeringClass= new Lesson('softEngineering',3,50)
let networkClass= new Lesson('network',3,30)
console.log(softEngineeringClass)
console.log(networkClass)


//ب
softEngineeringClass.project=true
console.log(softEngineeringClass)
networkClass.book='network for student'
console.log(networkClass)
//__________________________________________
// class Lesson1{
//     constructor(className,classUnit,classCapicity){
//         this.className=className
//         this.classUnit=classUnit
//         this.classCapicity=classCapicity
//     }
// }
// let softEngineeringClass1= new Lesson1('softEngineering',3,50)
// let networkClass1= new Lesson1('network',3,30)
// console.log(softEngineeringClass1)
// console.log(networkClass1)
// class  SoftWareEngineeringClass extends Lesson{
//     constructor(className,classUnit,classCapicity,project){
//               super(className,classUnit,classCapicity)
//               this.project=project
//     }
// }
// let softEngineeringClass1= new SoftWareEngineeringClass('softEngineering',3,50,true)
// console.log(softEngineeringClass1)

// class NetworkClass extends Lesson{
//           constructor(className,classUnit,classCapicity,book){
//                     super(className,classUnit,classCapicity)
//                     this.project=book
//           }
// }
// let networkClass1= new NetworkClass('network',3,30,'network science')
// console.log(networkClass1)