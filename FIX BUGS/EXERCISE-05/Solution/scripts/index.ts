enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction) {
  if (direction === Direction.Up) {
    console.log("Moving up!");
  }
}

move(Direction.Up);

const { Up, Down } = Direction;
