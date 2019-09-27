const employees = [
    {
        name: 'Antonio',
        money: 500,
        timezone: "Europe/Madrid",
        date: '10/02/2017 -- 10:30:30',
        updated_at: "",
    },
    {
        name: 'Ruben',
        money: 2500,
        timezone: "Europe/Madrid",
        date: '10/02/2017 -- 10:30:30',
        updated_at: "",
    },
    {
        name: 'Marta',
        money: 1500,
        timezone: "Europe/Madrid",
        date: '10/01/2017 -- 10:30:30',
        updated_at: "",
    }
];
const moment = require("moment");
const DATE_FORMAT = 'DD/MM/YYYY';
const DATE_FORMAT_COMPLETE = 'DD/MM/YYYY HH:mm:ss';

const getDate = (employeeArray, name) => {
    const arrayValue = employeeArray.find(o => o.name === name);
    const dateValue = moment(arrayValue.date, DATE_FORMAT_COMPLETE);
    return dateValue;
}

const diffDates = ( date1, date2 ) => {
    return date1.isSame(date2);
};

const sumDates = ( date, unitTimes ) => {
    const clonedDate = date.clone();
    unitTimes.forEach((current) => {
        const splitedCurrent = current.split("");
        const number = splitedCurrent[0];
        const shortHand = splitedCurrent[1];
        clonedDate.add(number, shortHand);
    });
    return clonedDate;
};

const setDateEmployee = name => {
    const employee = employees.find(obj => obj.name === name);
    employee.date = moment().format(DATE_FORMAT_COMPLETE);
    console.log("setted successfully");
};

const sumDiffDate = () => {
    const datesArray = employees.map(element => getDate(employees, element.name));
    const diffArray = datesArray.slice(1).map((current, index) => {
        return datesArray[index].diff(current, 'days');
    });
    const sumDiff = diffArray.reduce((accumulator, current) => accumulator + current, 0);
    return sumDiff + " days";
};

const unitTimesArray = ['1d', '1d', '1d'];
const dateMarta = getDate(employees, "Marta");
const dateRuben = getDate(employees, "Ruben");
console.log("isDifferent?: " + diffDates(dateRuben, dateMarta));
console.log(dateRuben," + ", unitTimesArray," = ", sumDates(dateRuben, unitTimesArray));
setDateEmployee("Antonio");
const dateAntonio = getDate(employees, "Antonio");
console.log(dateAntonio);
console.log(sumDiffDate());