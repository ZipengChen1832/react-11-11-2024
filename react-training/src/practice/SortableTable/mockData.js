const developers = [
  {
    fullName: "Wendall Gripton",
    email: "wg@creative.org",
    gender: "Male",
    age: 100,
    startDate: "2022-01-26",
  },
  {
    fullName: "samuel Mollitt",
    email: "smol@github.io",
    gender: "Male",
    age: 60,
    startDate: "2022-01-26", 
  },
  {
    fullName: "Ole Rogge",
    email: "orog@usatoday.com",
    gender: "Male",
    age: 50,
    startDate: "2021-06-23",
  },
  {
    fullName: "Elwin Huyge",
    email: "elwin@huyge.com",
    gender: "Male",
    age: 34,
    startDate: "2021-06-07",
  },
  {
    fullName: "Arny Amerighi",
    email: "aameri@ibm.com",
    gender: "Male",
    age: 35,
    startDate: "2021-03-09",
  },
  {
    fullName: "Lynnell Shimmans",
    email: "lshim.mans6@addthis.com",
    gender: "Male",
    age: 25,
    startDate: "2021-06-03",
  },
  {
    fullName: "Jodi Nickless",
    email: "jnickless9@dagon.com",
    gender: "Male",
    age: 36,
    startDate: "2021-02-05",
  },
  {
    fullName: "Anthe Maybery",
    email: "amay@dyndns.org",
    gender: "Female",
    age: 31,
    startDate: "2021-07-05",
  },
  {
    fullName: "Pierre Klug",
    email: "pklug7@virginia.edu",
    gender: "Female",
    age: 36,
    startDate: "2021-09-19",
  },
  {
    fullName: "Melantha Jakeway",
    email: "mjakeway8@noaa.gov",
    gender: "Female",
    age: 48,
    startDate: "2021-01-07",
  },
];

export default function fetchDevelopers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(developers);
    }, 500);
  });
}
