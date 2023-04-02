import React from "react";
import styles from "../Pages/Thankyou.module.css";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useDispatch} from "react-redux";
import {resetAction} from "../redux/cartReducer/action";
function Thankyou() {
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(resetAction)
  }
  return (
    <Box  id="box" >
      <div className={styles.content}>
        <div className={styles.wrapper1}>
          <div className={styles.wrapper2}>
            <h1 className={styles.h1}>Thank you</h1>
            <p>
              Thanks for being awesome,
              <br />
              We hope you enjoy your purchase!
            </p>

            <button className={styles.gohome}>
              <Link to={"/"} onClick={handleClick}>go home</Link>
            </button>
          </div>
          <div className={styles.pyro}>
            <div className={styles.before}></div>
            <div className={styles.after}></div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Thankyou;