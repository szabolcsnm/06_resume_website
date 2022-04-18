import avatarImage from "../picture/profile-picture.jpg";

function Avatar() {
    return (
        <div className="grid-main-picture">
            <img src={avatarImage} alt="Avatar" />
        </div>
    );
}

export default Avatar;
