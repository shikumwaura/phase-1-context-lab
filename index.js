/* Your Code Here */ 
// 1. Create a single employee record from an array
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// 2. Create multiple employee records from an array of arrays
function createEmployeeRecords(employeeArrays) {
  return employeeArrays.map(createEmployeeRecord);
}

// 3. Add a TimeIn event to an employee record
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });
  return this;
}

// 4. Add a TimeOut event to an employee record
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });
  return this;
}

// 5. Calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(e => e.date === date).hour;
  const timeOut = this.timeOutEvents.find(e => e.date === date).hour;
  return (timeOut - timeIn) / 100;
}

// 6. Calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// 7. Find employee by first name in an array of employee records
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

// 8. Calculate total payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

