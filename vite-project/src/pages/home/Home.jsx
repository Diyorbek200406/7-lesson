import { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../context/auth";
import "./home.css";

const Home = () => {
  const { token, setToken } = useContext(Auth);
  const logoutHandle = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <div className="d-flex justify-content-between bg-light">
      <div className="left">
        <ul className="ul">
          <li></li>
          <li>Home</li>
          <li>Explore</li>
          <li>Notification</li>
          <li>Messages</li>
          <li>Bookmarks</li>
          <li>Lists</li>
          <li>Profile</li>
          <li>More</li>
          <button className="btn btn-info w-75">Tweet</button>
        </ul>
      </div>
      <main className="bg-light">
        <h1 className="p-2">Home</h1>
        <hr />
        <div>
          {token ? (
            <button onClick={logoutHandle} className="btn btn-info">
              Logout
            </button>
          ) : (
            <Link className="btn btn-danger" to={"/login"}>
              Login
            </Link>
          )}
          <span className="px-4">
            {token ? "Login qilingan" : "Login qilinmagan !"}
          </span>
        </div>

        <section>
          <div className="user1 d-flex p-3">
            <div className="l mx-2">
              <img src="./src/assets/user1.png" alt="user1" />
            </div>
            <div className="r">
              <h6>Designs</h6>
              <p>
                Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                zerikmadinglarmi?
              </p>
            </div>
          </div>
          <hr />
          <div className="user2 d-flex p-3">
            <div className="l mx-2">
              <img src="./src/assets/user2.png" alt="user2" />
            </div>
            <div className="r">
              <h6>cloutexhibition</h6>
              <p>
                YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
                ko’rib hursand bo’ladi odam.
              </p>
            </div>
          </div>
          <div className="user3 d-flex p-3">
            <div className="l mx-2">
              <img src="./src/assets/user3.png" alt="user3" />
            </div>
            <div className="r">
              <h6>CreativePhoto</h6>
              <p>
                Обетда... <br /> Кечиринглар
              </p>
            </div>
          </div>
          <div className="user4 d-flex p-3 justify-content-center">
            <div className="l mx-2">
              <img src="./src/assets/user4.png" alt="user4" />
            </div>
          </div>
        </section>
      </main>
      <div className="right py-5">
        <input type="search" className="form-control w-75 search my-2" />
        <div className="trend p-2 rounded-4">
          <h3>Trends for you</h3>
          <p>Trending in Germany</p>
          <h5>Revolution</h5>
          <p>50.4K Tweets</p>
          <p>Trending in Germany</p>
          <h5>Revolution</h5>
          <p>50.4K Tweets</p>
          <p>Trending in Germany</p>
          <h5>Revolution</h5>
          <p>50.4K Tweets</p>
        </div>
        <div className="like p-2 rounded-4">
          <h4>You might like</h4>
          <div className="user5 d-flex p-1">
            <div className="l m-right-1">
              <img src="./src/assets/user5.png" alt="user6" />
            </div>
            <div className="r">
              <h6>Mushtariy</h6>
              <p>@Mushtar565266</p>
            </div>
          </div>
          <div className="user6 d-flex p-1">
            <div className="l m-right-1">
              <img src="./src/assets/user6.png" alt="user6" />
            </div>
            <div className="r">
              <h6>Shuhratbek</h6>
              <p>@mrshukhrat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
