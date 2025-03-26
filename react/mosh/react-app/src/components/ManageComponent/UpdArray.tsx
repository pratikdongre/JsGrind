import { useState } from "react";

function UpdArray() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // add
    // setTags((prevTags) => [...prevTags, "exciting"]);

    //remove
    // setTags((prevTags) => {
    //   return prevTags.filter((tag) => {
    //     return tag !== "happy";
    //   });
    // });

    // update
    //   setTags((prevTags) => {
    //     return prevTags.map((tag) => {
    //       return tag === "exciting" ? "notHappy" : tag;
    //     });
    //   });
    //
    // you should use the same state update in one state
    // to avoid overwriting each other

    setTags((prevTags) => {
      let updatedTags = [...prevTags, "exciting"]; // add
      updatedTags = updatedTags.filter((tag) => tag !== "happy"); // remove
      return updatedTags.map((tag) => (tag === "exciting" ? "notHappy" : tag)); // update
    });
  };

  return (
    <>
      {tags}
      <button onClick={handleClick}>CLick</button>
    </>
  );
}

export default UpdArray;
