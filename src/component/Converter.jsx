import classes from "../styles/Converter.module.css";
export default function Converter(props) {
    return (
      <div className={classes.converter}>
        <div className={classes.converterHeading}>
          <h1>{props.heading}</h1>
        </div>
        <div className={classes.converterBox}>
            <div className={classes.converterBox2}></div>
        </div>
      </div>
    );
  }
  
