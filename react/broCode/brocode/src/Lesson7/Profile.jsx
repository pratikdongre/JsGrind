import ProfilePic from "../assets/profile.jpeg"; // Go up one level from Lesson7


function Profile(){
let image = ProfilePic;
let img2 = '/assets/profile.jpeg';

let handleClick = (e) => {e.target.style.display = 'none';
    console.log("gone");
    
};


return (
    <img onClick={(e) => handleClick(e)} className="w-25" src={img2} alt="" />
);
}


export default Profile
