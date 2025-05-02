import React from "react";

function Profile() {
  let img =
    "https://media.licdn.com/dms/image/v2/D4D03AQFliI56uoMO9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702062827519?e=2147483647&v=beta&t=sNNnICgCgOTn-m8iKTHINawcdEluMHTGJZM_qB56-Vk";

  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <>
      <img
        className="cursor-pointer"
        onClick={(e) => handleClick(e)}
        src={img}
        alt=""
      />
    </>
  );
}

export default Profile;
