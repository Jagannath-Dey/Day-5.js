//======= ES6 super keyword======

class parent{
hello1(){
    console.log('I love javascript');
}
hello2(){
    console.log('We love javascript');
}
}

class child extends parent{

demo(){
    super.hello1();
    super.hello2();
}
}
var obj=new child();
obj.demo();