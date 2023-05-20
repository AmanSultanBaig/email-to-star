let regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const convertToStar = (email) => {
  if (!regex.test(email)) {
    console.log({ error: "Invalid email" });
    return { error: "Invalid email" };
  }

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

  console.log(hiddenEmail + domain);
};

convertToStar("amansultanabig@gmail.com");
