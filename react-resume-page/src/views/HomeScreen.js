/* React Components */
import NavbarCategory from "../components/NavbarCategory";
import Introduction from "../components/Introduction";
import Avatar from "../components/Avatar";

function HomeScreen() {

    return (
        <div className="grid-main">
            <div className="grid-main-content">
                <NavbarCategory />
                <Introduction />
                <div className="blank-space"></div>
            </div>
            <Avatar />
        </div>
    )
}

export default HomeScreen;