## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
~ I got this: ƒ log() { [native code] }
And it tells us that console.log is a built-in function (or "native function") provided by the JavaScript engine in the browser.

Now enter just `console` in the Console, what output do you get back?
~ I got this: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
console is an object that contains various functions (called "methods") for logging and debugging.
Some of the methods listed in my output are:
error: ƒ error()
group: ƒ group()
info: ƒ info()
log: ƒ log()

Try also entering `typeof console`
~ I got this: 'object'
It returned "object", because console is an object in JavaScript.

Answer the following questions:

What does `console` store?
~ console is an object that stores a collection of methods (or functions) that you can use for debugging and logging information in the browser.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
~ The dot (.) is used to access a property or method of an object.
console.log means you’re accessing the log method on the console object.
console.assert means you’re accessing the assert method on the console object.
