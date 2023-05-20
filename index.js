const isEmailValid = require("./utils/email.tester");

const convertToStar = (email) => {
  if (!isEmailValid(email)) {
    return { error: "Invalid email" };
  }

  email = email.trim();
  const emailId = email.split("@")[0];
  const domain = email.split("@")[1];
  let hiddenEmail = email[0];

  for (let i = 1; i < emailId.length; i++) {
    if (i < 4) {
      hiddenEmail += emailId[i];
    } else {
      hiddenEmail += "*";
    }
  }
  let result = hiddenEmail + "@" + domain;
  return result;
};

module.exports = convertToStar;
