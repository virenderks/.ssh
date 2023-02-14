
class Student{
    constructor(name,age,marks){
      this.name=name;
      this.age=age;
      this.marks=marks;
    }
    setPlacementAge(minPlacementAge) {
        return (minMarks) => { 
if (this.marks >= minMarks && this.age >= minPlacementAge){
return true;
}else{
return false;
}

