## Solution

## Concept Taught: OPTIONAL TYPES WITH DEFAULT VALUES

Let's break down whats going on here.

```typescript
function logMessage(message: string, toUpperCase?: boolean = "true") {
  if (toUpperCase) {
    console.log(message.toUpperCase());
  } else {
    console.log(message.toLowerCase());
  }
}

logMessage("Hello World", false);
```

We have two errors:

- `Parameter cannot have question mark and initializer.`
- `Type '"true"' is not assignable to type 'boolean | undefined'.`

### Error 1

The second one is easy to solve so lets do that first. I hope that you'll have already fixed the second. Anyways, we are assigning a type `boolean` to `toUpperCase` param. But we are giving a string "true" as default. As we have learnt already that true and "true" are not same. "true" is string and true is boolean. So solution is:

```typescript
function logMessage(message: string, toUpperCase?: boolean = true) {
  if (toUpperCase) {
    console.log(message.toUpperCase());
  } else {
    console.log(message.toLowerCase());
  }
}
```

We just replaced "true" with true and error is resolved.

### Error 2

```
Parameter cannot have question mark and initializer.
```

`?` is used to make a param or anything optional. For example

```typescript
interface User {
  loggedIn: boolean;
  bio?: string;
}
```

Here `bio` is an optional property of User, User may or may not have a bio.
Similar in our scenario we are making `toUpperCase` optional param. While calling function if we do not provide the second argument, we'll not get any error, because second param is optional.

```typescript
logMessage("Hello World");
```

```typescript
logMessage("Hello World", false);
```

Both are correct in terms of typescript.

But why the hell are we getting error of `Parameter cannot have question mark and initializer.` It does not make any sense, right?
The answer to your question is, we are setting a default value for `toUpperCase`. When we set a default value for a param, that makes a param optional without any `?`. But we are using `?` here even then... So solution here is very simple. Just remove optional chaining and just set a default value.

```typescript
function logMessage(message: string, toUpperCase: boolean = true) {
  if (toUpperCase) {
    console.log(message.toUpperCase());
  } else {
    console.log(message.toLowerCase());
  }
}
```

And it will not effect the type of `toUpperCase`. We are free to pass second argument. It will not give any error even then...

Was it fun? I think so. Happy Coding mates.😊
