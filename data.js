// Hello There. Just A Place For Transfering Some data User request.
// Have A Good Day!

// Requests Data Storage

const ContactForm = document.querySelector("#Social_Form");

const NameInput = document.querySelector("#name input");
const EmailInput = document.querySelector("#mail input");

ContactForm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();

    // Get Current Values
    let Name = NameInput.value;
    let Email = EmailInput.value;

    // Init Data Values
    let dataEntry = {
      "entry.1573542637": Name,
      "entry.772186418": Email,
    };

    let dataEntryParams = new URLSearchParams(dataEntry);
    let DataEntryString = dataEntryParams.toString();

    // Push Data Values
    var dataPush = new XMLHttpRequest();
    dataPush.open(
      "POST",
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRrhKQ9VY7kUOLPOJhf-ufaX0Byc6ygEF1yVDFBhrP3F9Ytg/formResponse",
      true
    );

    dataPush.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    console.log(DataEntryString);
    dataPush.send(DataEntryString);
  },
  { once: true }
);
