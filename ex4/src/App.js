import logo from './logo.svg';
import './App.css';

function App() {
  let description = "(I don't know why it is here either)";

  const course = ["React", "ReactNative", "NodeJs"];

  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];
  const q1 = people.find((person) => {
    return person.age >= 10 && person.age <= 20;
  });
  const q2 = people.filter((person) => {
    return person.age >= 10 && person.age <= 20;
  });
  const q3 = people.every((person) => {
    return person.age >= 10 && person.age <= 20;
  });
  const q4 = people.some((person) => {
    return person.age >= 10 && person.age <= 20;
  });

  var array = [1, 2, 3, 4];

  var q5 = array.reduce((acc, current) => acc + current, 0);

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };

  const q6 = companies.map((company) => {
    if (company.category == "Retail")
      return (
        <div className="flex">
          <div>{company.name}</div>
          <div>{company.start}</div>
          <div>{company.end}</div>
        </div>
      );
  });
  const q7 = companies.sort(
    (company1, company2) => company1.end - company2.end
  );
  const q8 = ages.sort((age1, age2) => age2 - age1);
  const q9 = ages.reduce((acc, current) => acc + current, 0);
  const q10 = companies.map((company) => ({
    name: company.name,
    category: company.category,
    print: function () {
      console.log(this.name);
    },
  }));


  const q11 = (...args) => {
    const q = [...args].reduce((acc, current) => acc + current, 0);
    return q;
  };
  const q12 = (...args) => {
    return [...args];
  };
  const {
    address: { street },
  } = person;
  const q13 = (() => {
    var x = 0;
    return () => {
      return ++x;
    };
  })();

  const q14 = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    let queryParams = {};

    for (let param of params) {
      queryParams[param[0]] = param[1];
    }
    return queryParams;
  };

  class Shape {
    constructor(color) {
      this.color = color;
    }
    getArea() {}
    toString() {}
  }
  class Rectagle extends Shape {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  }
  class Triangle extends Shape {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  }

  const q15 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    if (num > 5) {
      resolve(num);
    } else {
      reject("Error: Number is less than or equal to 5");
    }
  });
  q15.then((num) => console.log(num)).catch((err) => console.error(err));
  return (
    <div className="App">
      <header>
        <ul className="header">
          <li>Home</li>
          <li>Search</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </header>
      <div className="App-body">
        <h2 className="Ex1">
          Hello <span className="blue-bold">React</span>
        </h2>
        <div className="App-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="label">
          <p className="logo-label">This is the React logo!</p>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="Ex4 blue-bold">This is JSX</div>
      <div>
        <span>Course names</span>
        <ul>
          {course.map((course) => (
            <li>course</li>
          ))}
        </ul>
      </div>
      {q6}
    </div>
  );
}

export default App;
