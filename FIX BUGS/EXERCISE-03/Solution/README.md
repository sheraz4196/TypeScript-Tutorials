## Solution

### Concept Taught: `interface alias` Basics

Let's decode the errors one by one. But before we move on to the errors we must understand what's going on here

### Block 1

Here we are defining types for an object. This object will have name and age properties.

```typescript
interface Person {
  name: string;
  age: number;
}
```

### Block 2

Here we are assigning that interface alias to person parameter. It means that function will accept an object with two properties, `name` and `age`. `name` should be a type of `string` and `age` should be a type of `number`. Okay?
Now we are logging a message from person object. `person` is param of type `Person`, like:

```typescript
const person = {
  name: "123",
  age: 12,
};
```

But here we are logging a type which does not exist in person called `firstName`. We actually never defined it in the `Person` interface. So it gives us error:

```
Property 'firstName' does not exist on type 'Person'.
```

```typescript
function greet(person: Person) {
  console.log(`Hello, ${person.firstName}`);
}
```

To solve this simply correctly write the name of property called `name` not the `firstName`

```typescript
function greet(person: Person) {
  console.log(`Hello, ${person.name}`);
}
```

### Block 3

```typescript
greet({ name: "John", age: "30" });
```

Here we are calling the function with an object as argument. On the above block line we learned that `greet` function accepts an object as parameter. And the object should have two properties name and age, The name should be of type string and age should be of type number. And in the previous exercise we learnt that anything inside "" is inferred as string. And here we are doing the same mistake, we are assigning age as a string. Does that make sense?
So, to fix this pass the arguments correctly:

```typescript
greet({ name: "John", age: 30 });
```

And this will fix the error.

Congratulations on learning a new thing in typescript. Happy Coding 😎
