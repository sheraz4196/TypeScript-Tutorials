// Block One
interface Person {
  name: string;
  age: number;
}

// Block Two
function greet(person: Person) {
  console.log(`Hello, ${person.firstName}`);
}

// Block Three
greet({ name: "John", age: "30" });
