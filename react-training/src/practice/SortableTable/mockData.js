const developers = [
  {
    full_name: "Wendall Gripton",
    email: "wg@creative.org",
    gender: "Male",
    age: 100,
    start_date: "2022-01-26",
  },
  {
    full_name: "samuel Mollitt",
    email: "smol@github.io",
    gender: "Male",
    age: 60,
    start_date: null, // Missing in the image
  },
  {
    full_name: "Ole Rogge",
    email: "orog@usatoday.com",
    gender: "Male",
    age: 50,
    start_date: "2021-06-23",
  },
  {
    full_name: "Elwin Huyge",
    email: null, // Missing in the image
    gender: "Male",
    age: 34,
    start_date: "2021-06-07",
  },
  {
    full_name: "Arny Amerighi",
    email: "aameri@ibm.com",
    gender: "Male",
    age: 35,
    start_date: "2021-03-09",
  },
  {
    full_name: "Lynnell Shimmans",
    email: "lshim mans6@addthis.com", // Note the extra space, might need cleaning
    gender: "Male",
    age: null, // Missing in the image
    start_date: "2021-06-03",
  },
  {
    full_name: "Jodi Nickless",
    email: "jnickless9@dagon.com",
    gender: "Male",
    age: 36,
    start_date: "2021-02-05",
  },
  {
    full_name: "Anthe Maybery",
    email: "amay@dyndns.org",
    gender: "Female",
    age: 31,
    start_date: "2021-07-05",
  },
  {
    full_name: "Pierre Klug",
    email: "pklug7@virginia.edu",
    gender: "Female",
    age: 36,
    start_date: "2021-09-19",
  },
  {
    full_name: "Melantha Jakeway",
    email: "mjakeway8@noaa.gov",
    gender: "Female",
    age: 48,
    start_date: "2021-01-07",
  },
];

export default function fetchDevelopers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(developers);
    }, 500);
  });
}
