import React from "react";

function Card() {
  return (
    <div class="m-1 rounded-2xl inline-block p-4 border-2 shadow-2xl">
      <img
        class="rounded-[80px] w-40 object-cover h-40"
        src="https://media.licdn.com/dms/image/v2/D4D03AQFliI56uoMO9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702062827519?e=2147483647&v=beta&t=sNNnICgCgOTn-m8iKTHINawcdEluMHTGJZM_qB56-Vk"
        alt=""
      />

      <h1 class="text-center font-bold">Pratik Dongre</h1>
      <p class="text-center">Im fun</p>
    </div>
  );
}
export default Card;
