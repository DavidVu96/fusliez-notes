import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : theme.inputBackgroundColor,
    borderRadius: "0.5rem",
    width: "100%",
  }),
  circularBar: (props) => ({
    fontSize: props.isMobile ? "0.5rem" : "1rem",
    width: props.orientation === "portrait" ? "5rem" : "5.5rem",
    height: props.orientation === "portrait" ? "5rem" : "5.5rem",
  }),
  progressBar: (props) => ({
    backgroundColor: props.progressColor
      ? props.progressColor
      : theme.inputTextColor,
    height: "0.75rem",
    borderRadius: "0.5rem",
    width: props.progress ? `${props.progress}%` : "0%",
    maxWidth: "100%",
  }),
}));
