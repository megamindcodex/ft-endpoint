const User = require("../models/user");

const get_user_data = async (userId) => {
  try {
    if (!userId) {
      console.error("userId is undefined");
      return null;
    }

    const user = await User.findById(userId).populate("finances");
    // console.log(user.finances.wallets[0].balance);

    return user;
  } catch (err) {
    console.error("Couldn't get user data", err.message, err);
    throw err;
  }
};

module.exports = { get_user_data };
