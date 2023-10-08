import "./index.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../contextAPI/context";
import Comments from "../comments";

/*Body component it includes all the announcement cards which contains all the details in it. getDummyData bring all the fake data from the server and shown it to ui. When user add new
announcement than then with the help of addData current data will be added to existing data and new announcement will come over the previous data.*/

let boolCheck = false;
const Body = () => {
  const { data, addData, isLogin } = useContext(AppContext);
  const getDummyData = async () => {
    const getData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await getData.json();
    // Used Context api addData frunction to add data a global space which can be used by other cdomponents for avoiding prop drilling.
    addData(data);
    return data;
  };

  useEffect(() => {
    if (boolCheck === false) {
      getDummyData();
      boolCheck = true;
    }
  }, []);

  if (!data) return <>Data Loading Please Wait.</>;
  return (
    <>
      <div className="container-wrapper">
        <div className="announcement-wrapper">
          {data.map((item) => (
            <div key={item.id + item.title} className="card-wrapper">
              <div className="card-heading">{item?.title}</div>
              <span>Announcements</span>
              <div className="card-content">{item?.body}</div>
              <Comments id={item.id} />
            </div>
          ))}
        </div>
        <div className="action-wrapper">
          <div>
            <span>All Posts</span>
          </div>
          <div>
            <span>Announcements</span>
          </div>
          <div>
            <span>Promotions</span>
          </div>
          <Link to={isLogin ? "/submit" : "/login"}>
            {" "}
            <button>Submit Announcements</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
