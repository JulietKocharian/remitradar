import React, { useEffect } from "react";
import styles from "./index.module.css";
import TrainingForm from "../trainingForm/TrainingForm";

export const Modal = ({ openModal, setOpenModal, screenHeight }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // useEffect(() => {
  //   const root = document.documentElement;
  //   root.style.overflow = (openModal && "hidden") || "auto";
  // }, [openModal]);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [openModal]);

  return (
    <div
      style={{ height: screenHeight }}
      onClick={closeModal}
      className={`${styles.modal} ${openModal ? styles.show : ""}`}
    >
      <div className={styles.modal_div}>
        <div className={styles.modal_header} onClick={stopPropagation}>
          <div className={styles.title}>
            <span className={styles.modal_close} onClick={closeModal}>
              X
            </span>
          </div>
          <TrainingForm />
        </div>
      </div>
    </div>
  );
};
