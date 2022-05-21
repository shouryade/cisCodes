const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");

const questionSchema = new mongoose.Schema({
	problem: {
		type: String,
		required: [true, "Please provide problem statement!"],
	},
	answer: {
		type: String,
		required: [true, "Please provide the answer!"],
		lowercase: true,
		select: false,
	},
	hint: {
		type: String
	},
	level: {
		type: Number,
		min: 0,
		unique: true,
		required: [true, "Please provide a level number!"],
	},
});

//WIP
// questionSchema.pre("save", async function (next) {
// 	if (!this.isModified("answer")) return next();

// 	this.answer = await bcrypt.hash(this.answer, 12);
// 	next();
// });

// questionSchema.methods.compareAnswer = async function (
// 	candidateAnswer,
// 	hashedAnswer
// ) {
// 	return await bcrypt.compare(candidateAnswer, hashedAnswer);
// };


const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
