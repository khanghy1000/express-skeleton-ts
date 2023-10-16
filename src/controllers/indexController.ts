import asyncHandler from "express-async-handler";

const index = asyncHandler(async (req, res) => {
    res.json({message: "hello"});
});
export default {
    index,
};
