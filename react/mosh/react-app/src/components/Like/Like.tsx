import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import react, { useState } from "react";

interface LikeProps {
  onClick: () => void;
}

function Like({ onClick }: LikeProps) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return (
    <span onClick={toggle}>
      {status ? (
        <AiFillHeart color="#ff6b81" size={40} />
      ) : (
        <AiOutlineHeart size={20} />
      )}
      {/* if (status) return{" "}
      <AiFillHeart color="#ff6b81" size={40} onClick={toggle} />; return{" "}
      <AiOutlineHeart size={20} onClick={() => setStatus(true)} />; */}
    </span>
  );k lm
}

export default Like;
