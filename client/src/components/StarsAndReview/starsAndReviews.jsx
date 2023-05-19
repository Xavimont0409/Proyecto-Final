import { FaStar, FaUser } from "react-icons/fa";
import styles from './starsAndReviews.module.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const StarReview = () => {
  const starsData = [
    {
      stars: "3",
      text: "tiene que mejorar su vacante de empleo"
    },
    {
      stars: "4",
      text: "tiene que mejorar su vacante de empleo2"
    }
  ];

  return (
    <div className={styles.container}>
      {starsData.map((star, index) => (
        <div className={styles.review} key={index}>
          <div className={styles.userIcon}>
            <FaUser size={24} />
          </div>
          <div className={styles.reviewContent}>
            <div className={styles.stars}>
              {Array(5).fill(0).map((_, i) => (
                <FaStar
                  key={i}
                  size={16}
                  color={i < parseInt(star.stars) ? colors.orange : colors.grey}
                />
              ))}
            </div>
            <p className={styles.comment}>{star.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarReview;
