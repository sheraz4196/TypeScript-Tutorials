function logMessage(message: string, toUpperCase: boolean = true) {
  // Error: Default value is not a boolean
  if (toUpperCase) {
    console.log(message.toUpperCase());
  } else {
    console.log(message.toLowerCase());
  }
}

logMessage("Hello World", false);
