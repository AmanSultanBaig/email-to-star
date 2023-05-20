const isEmailValid = require("./utils/email.tester");

const convertEmailToStar = (email) => {
  if (!isEmailValid(email)) {
    return { error: "Invalid email" };
  }

  email = email.trim();
  let result = "";
  const emailId = email.split("@")[0];
  const domain = email.split("@")[1];

  for (let i = 0; i < emailId.length; i++) {
    if (i < 4) {
      result += emailId[i];
    } else {
      result += "*";
    }
  }
  result = result + "@" + domain;
  return result;
};

console.log(convertEmailToStar("amansultanbaig@gmail.com"));

module.exports = convertEmailToStar;
