import React, { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import styles from "./starsAndReviews.module.css";
import { useDispatch } from "react-redux";
import { postStars } from "../../Redux/Actions/actionsFunction/actionsStars";
import Swal from "sweetalert2";
import { getCompanyDetail } from '../../Redux/Actions/actionsFunction/actionsCompanys'

const StarReview = ({ starsData, showComments, companyId }) => {
	const colors = {
		orange: "#FFBA5A",
		grey: "#a9a9a9",
	};

	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(0);

	const dispatch = useDispatch();

	const handleRatingChange = (value) => {
		setRating(value);
	};

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	const handleSubmit = async () => {
		if (comment && rating > 0) {
			try {
				const payload = {
					stars: rating,
					CompanyId: companyId,
					text: comment,
				};
				const data = await dispatch(postStars(payload));
				setComment("");
				setRating(0);
				dispatch(getCompanyDetail(companyId))
				console.log(data);
			} catch (error) {
				Swal.fire({
					title: "Error",
					text: `${error.response.data.error}`,
					icon: "error",
				});
				console.error("Error:", error);
			}
		} else {
			Swal.fire({
				title: "Opss..",
				text: "Por favor, ingresa un comentario y selecciona una calificación.",
				icon: "error",
			});
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.review}>
				<div className={styles.userIcon}>
					<FaUser size={24} />
				</div>
				<div className={styles.reviewContent}>
					<div className={styles.stars}>
						{Array(5)
							.fill(0)
							.map((_, i) => (
								<FaStar
									key={i}
									size={16}
									color={
										i < rating ? colors.orange : colors.grey
									}
									onClick={() => handleRatingChange(i + 1)}
								/>
							))}
					</div>
					{showComments && (
						<>
							<textarea
								className={styles.commentInput}
								placeholder='Write your comment...'
								value={comment}
								onChange={handleCommentChange}
							/>
							<button
								className={styles.submitButton}
								onClick={handleSubmit}
							>
								Submit
							</button>
						</>
					)}
				</div>
			</div>
			{starsData.map((star, index) => (
				<div className={styles.review} key={index}>
					<div className={styles.userIcon}>
						<FaUser size={24} />
					</div>
					<div className={styles.reviewContent}>
						<div className={styles.stars}>
							{Array(5)
								.fill(0)
								.map((_, i) => (
									<FaStar
										key={i}
										size={16}
										color={
											i < parseInt(star.stars)
												? colors.orange
												: colors.grey
										}
									/>
								))}
						</div>
						{showComments && (
							<p className={styles.comment}>{star.text}</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default StarReview;
