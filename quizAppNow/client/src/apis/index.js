import axios from "axios";

const baseURL =
	process.env.NODE_ENV === "production" ? "https://quizapp233.herokuapp.com" : "http://localhost:3000";

export default axios.create({
	baseURL,
	headers: { "Content-Type": "application/json" }
});
