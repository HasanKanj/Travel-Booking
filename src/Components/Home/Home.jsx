import "../Home/Home.css";
import Featured from "../../Components/Home/Featured/Featured";
import FeaturedProperties from "../Home/featuredProperties/FeaturedProperties";
import PropertyList from "../Home/propertyList/PropertyList";
import Steps from "../Home/Steps/Steps";
export default function Home() {
  return (
    <div>
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <Steps/>
      </div>
    </div>
  );
}
