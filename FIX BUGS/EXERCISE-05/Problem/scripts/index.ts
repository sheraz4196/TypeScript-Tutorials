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
