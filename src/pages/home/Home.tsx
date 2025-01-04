import { useState } from "react";

import classNames from "classnames";

import {
  avatarAngelaGray,
  avatarAnnaKim,
  avatarJacobThompson,
  avatarKimberlySmith,
  avatarMarkWebber,
  avatarNathanPeterson,
  avatarRizkyHasanuddin,
  imageChess,
} from "../../assets/images";
import styles from "./Home.module.scss";

const Home = () => {
  // active state used top 3 notifications
  const [active, setActive] = useState(true);

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.header}>
          <div
            className={classNames({
              [styles.hero]: true,
              [styles.active]: active,
            })}
          >
            <h1>Notifications</h1>
            <span>3</span>
          </div>
          <div className={styles.sub}>
            <button type="button" onClick={() => setActive(false)}>
              Mark all as read
            </button>
          </div>
        </div>

        <ul className={styles.notifications}>
          <li
            className={classNames({
              [styles.notification]: true,
              [styles.active]: active,
            })}
          >
            <div className={styles.hero}>
              <img
                className={styles.userImage}
                src={avatarMarkWebber}
                alt="avatar-mark-webber"
              />
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.mainText}>
                    <span className={styles.bold}>Mark Webber</span> reacted to
                    your recent post{" "}
                    <span className={styles.objectVarient1}>
                      My first tournament today!
                    </span>
                  </span>
                  <span className={styles.dot} />
                  <span className={styles.durationText}>1m ago</span>
                </div>
              </div>
            </div>
          </li>
          <li
            className={classNames({
              [styles.notification]: true,
              [styles.active]: active,
            })}
          >
            <div className={styles.hero}>
              <img
                className={styles.userImage}
                src={avatarAngelaGray}
                alt="avatar-angela-gray"
              />
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.mainText}>
                    <span className={styles.bold}>Angela Gray</span> followed
                    you
                  </span>
                  <span className={styles.dot} />
                  <span className={styles.durationText}>5m ago</span>
                </div>
              </div>
            </div>
          </li>
          <li
            className={classNames({
              [styles.notification]: true,
              [styles.active]: active,
            })}
          >
            <div className={styles.hero}>
              <img
                className={styles.userImage}
                src={avatarJacobThompson}
                alt="avatar-jacob-thompson"
              />
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.mainText}>
                    <span className={styles.bold}>Jacob Thompson</span> has
                    joined your group{" "}
                    <span className={styles.objectVarient2}>Chess Club</span>
                  </span>
                  <span className={styles.dot} />
                  <span className={styles.durationText}>1 day ago</span>
                </div>
              </div>
            </div>
          </li>
          <li
            className={classNames({
              [styles.notification]: true,
              [styles.active]: false,
            })}
          >
            <div className={styles.hero}>
              <img
                className={styles.userImage}
                src={avatarRizkyHasanuddin}
                alt="avatar-rizky-hasanuddin"
              />
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.mainText}>
                    <span className={styles.bold}>Rizky Hasanuddin</span> sent
                    you a private message
                  </span>
                  <span className={styles.dot} />
                  <span className={styles.durationText}>5 days ago</span>
                </div>
                <div className={styles.msgBox}>
                  <span>
                    Hello, thanks for setting up the Chess Club. I've been a
                    member for a few weeks now and I'm already having lots of
                    fun and improving my game.
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            className={classNames({
              [styles.notification]: true,
              [styles.active]: false,
            })}
          >
            <div className={styles.hero}>
              <img
                className={styles.userImage}
                src={avatarKimberlySmith}
                alt="avatar-kimberly-smith"
              />
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.mainText}>
                    <span className={styles.bold}>Kimberly Smith</span>{" "}
                    commented on your picture
                  </span>
                  <span className={styles.dot} />
                  <span className={styles.durationText}>1 week ago</span>
                </div>
              </div>
            </div>
            <img className={styles.imageSub} src={imageChess} alt="chess" />
          </li>
          <li
            className={classNames({
              [styles.notification]: true,
              [styles.active]: false,
            })}
          >
            <div className={styles.hero}>
              <img
                className={styles.userImage}
                src={avatarNathanPeterson}
                alt="avatar-nathan-peterson"
              />
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.mainText}>
                    <span className={styles.bold}>Nathan Peterson</span> reacted
                    to your recent post{" "}
                    <span className={styles.objectVarient1}>
                      5 end-game strategies to increase your win rate
                    </span>
                  </span>
                  <span className={styles.dot} />
                  <span className={styles.durationText}>2 weeks ago</span>
                </div>
              </div>
            </div>
          </li>
          <li
            className={classNames({
              [styles.notification]: true,
              [styles.active]: false,
            })}
          >
            <div className={styles.hero}>
              <img
                className={styles.userImage}
                src={avatarAnnaKim}
                alt="avatar-anna-kim"
              />
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.mainText}>
                    <span className={styles.bold}>Anna Kim</span> left the group{" "}
                    <span className={styles.objectVarient2}>Chess Club</span>
                  </span>
                  <span className={styles.dot} />
                  <span className={styles.durationText}>2 weeks ago</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
