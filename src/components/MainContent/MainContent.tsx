import PlayersSection from "components/PlayersSection";
import React from "react";
import Scores from "components/Scores";
import useStyles from "./MainContent.styles";

export default function MainContent({
  isMobile,
}: {
  isMobile: boolean;
}): JSX.Element {
  const classes = useStyles({ isMobile });

  return (
    <div id="main" className={classes.root}>
      {!isMobile && <Scores />}
      <PlayersSection />
    </div>
  );
}
