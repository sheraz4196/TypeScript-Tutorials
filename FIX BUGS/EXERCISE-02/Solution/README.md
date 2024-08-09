# Solution

### Concept Taught: Functions and Type Annotations

### Function

We are not defining types to the `addNumber` function parameters, then why the hell are we receiving lot of errors?

Cool down it is pretty much normal. As we have not defined or set types for function parameters,and we are adding both parameters inside our function, so typescript assumed them as numbers, because addition opreation makes sense on numbers. And we are defining return type as a string, which is again an invalid type. Because addition of two numbers is never a string. Here's how we can resolve this error:

```typescript
function addNumbers(a, b): number {
  return a + b;
}
```

But hold on we get a new error!!!
`Parameter 'q' implicitly has an 'any' type`
`Parameter 'b' implicitly has an 'any' type`

Now it is because we have just defined the return type as number but we have not defined parameters types. Here's how we can resolve those errors

```typescript
function addNumbers(a: number, b: number): number {
  return a + b;
}
```

Now we have defined proper types and it resolved the errors in the function!!!

### Function Call

Now here we get an error on hovering "10". It says `Argument of type 'string' is not assignable to parameter of type 'number'`

```typescript
console.log(addNumbers(5, "10"));
```

This is very much simple, as we have defined both parameters types as numbers, it means function will accept only two parameters, both of type numbers. To resolve this, simply pass second argument to the functions a number, not as a string!!

```typescript
console.log(addNumbers(5, 10));
```

Did it make sense to you?

If you are heaving trouble in learning it, it is very normal do not feel obsessed. If you still have questions, feel free to create an issue on github repository.
https://github.com/sheraz4196/TypeScript-Tutorials/issues
Happy Coding 😉
