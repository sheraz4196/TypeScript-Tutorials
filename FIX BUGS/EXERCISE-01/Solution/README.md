# Solution

### Line 1

```
let myString: string = 123;
```

We are assigning a type string to myString variable, but we are assigning a value of type number. So it gives us this error. The solution here is:

```
let myString: string = "123";
```

### Line 2

```
let myNumber: number = "Hello";
```

We are assigning a type number to myNumber variable, but we are assigning a value of type string. So it gives us this error. The solution here is:

```
let myNumber: number = 123;
```

### Line 4

```
let myBoolean: boolean = "true";
```

We are assigning a type string to myBoolean variable. Yes it is a string not a boolean, anything inside quotes a string. So "true" is not a boolean, it is a string instead. But we are assigning a value of type string. So it gives us this error. The solution here is:

```
let myBoolean: boolean = true;
```
