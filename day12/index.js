/**
 * 1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

Output: Not provided
Because user.age ia undefined. If left side of nullish coalescing is undefined or null, it returns the value from the right side.
*/

/*
2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

It will not be modified. It will return frozen value.
*/

/*
3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company, address: {city} = {}} = person;

*/
/*
4. Build a Student Management System
Store student details in an object (name, age, grades).
Implement a method to calculate the average grade.
*/

const studentDetails = {
  name: "Rashed",
  age: 32,
  grades: [70, 80, 90],
  averageGrade: function () {
    let sumOfGrades = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sumOfGrades += this.grades[i];
    }
    const averageGrade = sumOfGrades / this.grades.length;
    console.log("Average grade", averageGrade);
  }
};

studentDetails.averageGrade();

/* 
5. Book Store Inventory System
Store books in an object.
Add functionality to check availability and restock books.
*/

const bookStore = {
  books: [
    {
      id: 1,
      bookName: "Book one",
      stock: 3
    },
    {
      id: 2,
      bookName: "Book two",
      stock: 1
    },
    {
      id: 3,
      bookName: "Book three",
      stock: 0
    }
  ],
  isAvailable: function (id) {
    let isBookAvailable = false;
    for ({ id: bookId, stock, bookName } of this.books) {
      if (bookId === id && stock > 0) {
        isBookAvailable = true;
      }
    }
    console.log(isBookAvailable);
  },
  restockBooks: function (id, stockToAdd) {
    const bookToFind = this.books.find((book) => book.id === id);
    bookToFind.stock += stockToAdd;
  }
};

bookStore.isAvailable(3);
bookStore.restockBooks(2, 20);

console.log(bookStore.books);

/* 
6. What is the difference between Object.keys() and Object.entries()? Explain with examples

We have the studentDetails object here. 
If we run 
Object.keys(studentDetails); // it will return the keys of this object inside an array
If we run
Object.entries(studentDetails); // it will return an array which contains sub arrays with two value, one is key another is value

*/

/*
7. How do you check if an object has a certain property?
console.log(studentDetails.hasOwnProperty("name")); //true
*/

/*
8. What will be the output and why?
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

Output will be Doe, because newPerson has the reference of person object. If newPerson property get updated, it will update person property too.
*/

/*
9. What’s the best way to deeply copy a nested object? Expalin with examples
using structuredClone is the best way to copy  nested object. Because if we use Object.assign to copy object, it clones top level properties only. For nested objects it takes reference. So if we modify nested clone object, the original object will be modified too.
*/

const obj = {
  a: 1,
  b: { c: 2 }
};

const copyOfObj = structuredClone(obj);

console.log(copyOfObj);

/*
10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
*/

const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26
  }
];

for ({ name, address, age } of users) {
  console.log(name);
  console.log(address);
  console.log(age);
}
