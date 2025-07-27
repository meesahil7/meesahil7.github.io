import React from "react";
import Calendar from "./Calendar";
import "../Styles/gitstat.css";

export const GitStat = () => {
  return (
    <div className="gitcont">
      <h1 align="center">Github Overview</h1>
      <div className="git">
        <div id="calendar2">
          <Calendar />
        </div>
        <div className="bottom">
          <div>
            <p>
              <img
                id="stat"
                width="400px"
                src="https://github-readme-stats.vercel.app/api?username=meesahil7&show_icons=true&hide=&count_private=true&title_color=8A2BE2&text_color=ffffff&icon_color=8A2BE2&bg_color=292942&hide_border=true&show_icons=true"
                alt="Sahil's GitHub stats"
              />
            </p>
          </div>
          <div>
            <p>
              <img
                id="streak"
                src="https://github-readme-streak-stats.herokuapp.com/?user=meesahil7&stroke=ffffff&background=292942&ring=8A2BE2&fire=8A2BE2&currStreakNum=ffffff&currStreakLabel=8A2BE2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
                alt="Sahil's github streak"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
