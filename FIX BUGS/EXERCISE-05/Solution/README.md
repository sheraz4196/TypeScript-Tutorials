## Solution

## Concept Taught: ENUMS

Let's break down whats going on here.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction) {
  if (direction === "Up") {
    console.log("Moving up!");
  }
}

move(Direction.up);
```

We have two errors:

- `This comparison appears to be unintentional because the types 'Direction' and 'string' have no overlap.`
- `Property 'up' does not exist on type 'typeof Direction'. Did you mean 'Up'?`

### Error 1

Here we have type mismatch error.

```typescript
function move(direction: Direction) {
  if (direction === "Up") {
    console.log("Moving up!");
  }
}
```

We are assigning `Direction` type to direction parameter. And we are comparing direction with a string type "Uo". But that's a different thing. Because in enums we have defined some properties of an object, not strings. Like Up is property of enum Direction and Up has it's own value. But we are comparing it with a string.

It is very simple to resolve this error. Just compare direction with value of Direction.Up not with a string "Up"

```typescript
function move(direction: Direction) {
  if (direction === Direction.Up) {
    console.log("Moving up!");
  }
}
```

### Error 2

```
Property 'up' does not exist on type 'typeof Direction'. Did you mean 'Up'?
```

This is simple enough I guess, up does not exist on enum Direction. It is technically not a type error. Its a typo let's say.

```typescript
move(Direction.Up);
```

### Bonus Guideline

As the enum Direction is an object, we can also destructure values from it.

```typescript
const { Up, Down, Right, Left } = Direction;
```

Its like defining an object without assigning them a value

### Stringy Enums

Let's define a new enum.

```typescript
enum Hehe {
  "One",
  "two",
}
```

Any thought about it?

This is same as above. It is same as

```typescript
enum Hehe {
  One,
  two,
}
```

Both are similar. But better way is to define it without quotes. You'll see things in `Best Practices` module in this repo. There will be a lot of things and best practices regarding typescript.

Thanks for continuing with me so far. Was it fun? I think so. Happy Coding mates.😊
