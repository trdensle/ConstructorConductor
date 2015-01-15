//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

  var Person = function(name, age) {
  	this.name = name;
  	this.age = age;
  };


//Now create three instances of Person with data you make up

  //code here

var Trent = new Person("Trent", 31);
var Jeff = new Person("Jeff", 31);
var Cam = new Person("Cam", 31);



//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
	alert(this.name);
};

Trent.sayName(); 
// calls first instance in Trent