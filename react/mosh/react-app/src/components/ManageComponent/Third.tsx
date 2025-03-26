import { useState } from "react";

function Third() {
  const [firstName, setFirstName] = useState("Pratik");
  const [lastName, setLastName] = useState("Dongre");

  const fullName = firstName + " " + lastName;
  const [isLoading, setIsLoading] = useState(false);

  // so we might want to store the related variable  in one state object

  const [person, setPerson] = useState({
    fName: "Pratik",
    lName: "Dongre",
  });

  return (
    <>
      <div>{fullName}</div>
      <div>
        {firstName} {lastName}
      </div>
      <div>
        {person.fName} {person.lName}
      </div>
    </>
  );
}

export default Third;
