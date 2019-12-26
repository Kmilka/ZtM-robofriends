import React from "react";

const Card = ({name, email, id}) => {
	return (
					// eslint-disable-next-line

		<div className = 'tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5' >
			<img src={`https://robohash.org/${id}?200x200`} alt="avatar" />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;