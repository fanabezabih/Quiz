// Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.


//Pseudocode
// Input
//  orderId (string)
//  items (array of objects: {name, quantity, price})
//  status (string)



// Process
//  Create a class and constructor with orderId,items that includes name,quantity and price, and status as a parameter
// Create a method to calculate order amount
// Calculate total by summing (quantity * price) for each item
//  Simulate payment with a 2-second delay
//  On payment, set status to "paid" and print success

// Output
//     Total order amount
//     Status updated to "paid" and success message printed


class CustomerOrder {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.items = items;
    this.status = 'pending';
  }
  calculateTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.quantity * item.price;
    }
    return total;
  }
  async processPayment() {

    console.log("Processing payment...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.status = "paid";
    console.log(`Payment successful for order ${this.orderId}`);
  }
}
const order = new CustomerOrder("ID001", [
  { name: "Shoe", quantity: 2, price: 300 },
  { name: "Sweater", quantity: 3, price:500 }
]);
console.log("Total:", order.calculateTotal());
order.processPayment();



//2. Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.

//Pseudocode
// Input
// name,role, an array of tasks 

//Process
//Creating a class TeamMember and constructor with the properties of name,role, and an array of tasks
//Create a prototype method to marks the task completed
//Iterate through the tasks to check
//Create another method to check progress according to the tasks status
//Return a promise with resolve for the completed tasks and reject for remaining tasks

//Output
//the status of the tasks whether it is completed or not


class TeamMember {
 constructor(name, role, tasks) {
    this.name = name;
   this.role = role;
   this.tasks = tasks;
 }
 completeTask(taskTitle) {
   for (let task of this.tasks) {
     if (task.title === taskTitle) {
       task.completed = true;
     }
   }
 }
 checkProgress() {
   return new Promise((resolve, reject) => {
     const allDone = this.tasks.every(task => task.completed);
     if (allDone) {
       resolve("All tasks completed!");
     } else {
       reject("Pending tasks remaining");
     }
   });
 }
}

const member = new TeamMember("Fana", "QA", [
 { title: "Code", completed: false},
 { title: "Test", completed: false }
]);
member.completeTask("Code");
member.checkProgress()
 .then(console.log)
 .catch(console.log);







//3. Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.

//Pseudocode
//Input
//name,position, and interviews with date and status 

//Process
//Create a candidate class a constructor with name,position, and interviews arguments
//Create a method scheduleInterview(date) that pushes to the interviews a pending status
//Create an async sendConfirmation() function 
//Write an await new promise that resolves that sets Timeout of 1 second with a mesaage
//Print the message and return the promise 

//Output
//Confirmation of the interview






class Candidate {
 constructor(name, position) {
    this.name = name;
   this.position = position;
   this.interviews = [];
 }
 scheduleInterview(date) {
   this.interviews.push({ date: date, status: "pending" });
 }
 async sendConfirmation() {
   await new Promise(resolve => setTimeout(resolve, 1000));
   const message = `Interview confirmed with ${this.name}`;
   console.log(message);
   return message;
 }
}

const candidate = new Candidate("Hellen", "Backend Developer");
candidate.scheduleInterview("2025-03-25");
candidate.sendConfirmation();



 
//4.Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".

//Pseudocode
//Input
//title, instructor, and students with name and progress

//Process
//Create a Course class and constructor with title, instructor, and students as a parameters
//Create a method updateProgress(studentName, value) to modify the progress of the student
//Iterate through the students and if the studentName is found in one of the students,assign the progress to the value input
//Create an async generateCertificate(StudentName) function  and promise.It checks if the progress is 100 and if it is, it resolves and returns  and otherwise it will print incomplete progress.

//Output
//A progress status 








class Course {
 constructor(title, instructor, students) {
   this.title = title;
   this.instructor = instructor;
   this.students = students;
 }
 updateProgress(studentName, value) {
   for (let student of this.students) {
     if (student.name === studentName) {
       student.progress = value;
     }
   }
 }
 async generateCertificate(studentName) {
   const student = this.students.find(student => student.name === studentName);
   if (student && student.progress === 100) {
     return `Certificate generated for ${studentName}`;
   } else {
     throw "Incomplete progress";
   }
 }
}

const course = new Course("DAS 001", "Ms.Sharon", [
 { name: "Daniel", progress: 88 },
 { name: "Rahel", progress: 100}
]);
course.updateProgress("Daniel", 100);
course.generateCertificate("Daniel")
 .then(console.log)
 .catch(console.log);





 //5. 
// Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".


//Pseudocode
//Input 
//watchlist with symbol,threshold,currentprice objects

//Process
//Create a class StockTracker and constructor with watchlist properties
//Create a method that updates price with a symbol and newprice parameters
//Iterate through the watchlist and if the new input symbol is the same as the symbol in watchlist, then assign the new price
//Create async for checking alerts and by condition of the current price being greater than the threshold, resolve a promise 
// If it is not reject with a message of no alerts triggered

//Output
//List of stocks or no alerts triggered


class StockTracker {
 constructor(watchlist) {
   this.watchlist = watchlist;
 }
 updatePrice(symbol, newPrice) {
   for (let stock of this.watchlist) {
     if (stock.symbol === symbol) {
       stock.currentPrice = newPrice;
     }
   }
 }
 async checkAlerts() {
   const triggered = this.watchlist.filter(stock => stock.currentPrice >= stock.threshold);
   if (triggered.length > 0) {
     return triggered;
   } else {
     throw "No alerts triggered";
   }
 }
}

const tracker = new StockTracker([
 { symbol: "TSLA", threshold: 100, currentPrice: 120 },
 { symbol: "NFLX", threshold: 130, currentPrice: 150 }
]);
tracker.updatePrice("TSLA", 155);
tracker.updatePrice("NFLX", 130);
tracker.checkAlerts()
 .then(alerts => console.log("Triggered Alerts:", alerts))
 .catch(console.log);




























