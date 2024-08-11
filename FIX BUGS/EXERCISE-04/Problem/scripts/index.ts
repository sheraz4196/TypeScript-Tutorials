function logMessage(message: string, toUpperCase?: boolean = "true") {
  if (toUpperCase) {
    console.log(message.toUpperCase());
  } else {
    console.log(message.toLowerCase());
  }
}

logMessage("Hello World", false);
