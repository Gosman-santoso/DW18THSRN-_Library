import React from "react";

import { Link } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import "./detail.css";

function Detail() {
  return (
    <div className="box-detail">
      <main>
        <div className="cover-detail">
          <img
            src={require("./../../../Components/book/Tes-on-the-Road.png")}
            alt="book"
          />
          <div className="des-detail">
            <h1>Tess on the Road</h1>
            <p>Rachel Hartan</p>
            <ul>
              <li>
                <h2>Publication date</h2>
                <p>April 2020</p>
              </li>
              <li>
                <h2>Category</h2>
                <p>Sci-Fi</p>
              </li>
              <li>
                <h2>Pages</h2>
                <p>436</p>
              </li>
              <li>
                <h2>ISBN</h2>
                <p>9781789807554</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="about">
          <h1>About This Book</h1>
          <p>
            In the medieval kingdom of Goredd, women are expected to be ladies,
            men are their protectors, and dragons get to be whomever they want.
            Tess, stubbornly, is a troublemaker. You can’t make a scene at your
            sister’s wedding and break a relative’s nose with one punch (no
            matter how pompous he is) and not suffer the consequences. As her
            family plans to send her to a nunnery, Tess yanks on her boots and
            sets out on a journey across the Southlands, alone and pretending to
            be a boy.
          </p>
          <br />
          <p>
            Where Tess is headed is a mystery, even to her. So when she runs
            into an old friend, it’s a stroke of luck. This friend is a
            quigutl—a subspecies of dragon—who gives her both a purpose and
            protection on the road. But Tess is guarding a troubling secret. Her
            tumultuous past is a heavy burden to carry, and the memories she’s
            tried to forget threaten to expose her to the world in more ways
            than one.
          </p>
          <br />
          <p>
            Returning to the fascinating world she created in the award-winning
            and New York Times bestselling Seraphina, Rachel Hartman introduces
            readers to a new character and a new quest, pushing the boundaries
            of genre once again in this wholly original fantasy.
          </p>

          <div className="boxBtn">
            <button className="active">
              Add Library <BiBookmark />{" "}
            </button>
            <Link to="/read">
              <button>Read Book ></button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Detail;
