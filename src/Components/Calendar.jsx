import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "../Styles/gitstat.css";

const Calendar = () => {
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);

  const mobile = window.matchMedia("(min-width: 320px) and (max-width: 480px)");
  const tablet = window.matchMedia("(min-width: 481px) and (max-width: 768px)");
  // const laptop = window.matchMedia("(min-width: 769px)");

  useEffect(() => {
    if (mobile.matches) {
      setBool1(true);
    } else if (tablet.matches) {
      setBool2(true);
    } else {
      setBool3(true);
    }
  }, [mobile.matches, tablet.matches]);

  // function myFunction(x) {
  //   if (x.matches) {
  //     document.body.style.backgroundColor = "yellow";
  //   } else {
  //     document.body.style.backgroundColor = "pink";
  //   }
  // }
  // x.addListener(myFunction);
  // myFunction(x);
  return (
    <div>
      {bool1 && (
        <GitHubCalendar
          id="calendar1"
          style={{
            height: "90px",
            // padding: "5px",
            cursor: "pointer",
            maxWidth: "350px",
            // border: "1px solid red",
          }}
          color="blueviolet"
          fontSize={14}
          blockSize={16}
          blockMargin={5}
          // blockRadius={15}
          username="meesahil7"
        >
          <ReactTooltip delayShow={40} html />
        </GitHubCalendar>
      )}
      {bool2 && (
        <GitHubCalendar
          id="calendar1"
          style={{
            height: "100px",
            padding: "15px",
            cursor: "pointer",
          }}
          color="blueviolet"
          fontSize={12}
          blockSize={12}
          blockMargin={5}
          // blockRadius={15}
          username="meesahil7"
        >
          <ReactTooltip delayShow={40} html />
        </GitHubCalendar>
      )}
      {bool3 && (
        <GitHubCalendar
          id="calendar1"
          style={{
            height: "150px",
            padding: "15px",
            cursor: "pointer",
          }}
          color="blueviolet"
          fontSize={14}
          blockSize={10}
          blockMargin={5}
          // blockRadius={15}
          username="meesahil7"
        >
          <ReactTooltip delayShow={40} html />
        </GitHubCalendar>
      )}
    </div>
  );
};

export default Calendar;
