function Person(name, mobile, date_of_birth) {
  this.name = name;
  this.mobile = mobile;
  //this.date_of_birth = date_of_birth;
  this.birthday = new Date(date_of_birth).toString();

}

const per1 = new Person("Mokammel", "0191557363", "2022-12-25");

console.log(per1);