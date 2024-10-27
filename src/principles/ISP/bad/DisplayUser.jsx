// const user = {
//   name: "josh",
//   age: 23,
//   hairColor: "blonde",
//   heightInCm: 175,
// };

const user = {
  personalInfo: {
    name: "josh",
    age: 23,
  },
  physicalFeatures: {
    hairColor: "blone",
    heightIn: 175,
  },
};

const DisplayUser = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}! </h1>
    </div>
  );
};
