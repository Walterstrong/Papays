const Member = require("../models/Member");
const jwt = require("jsonwebtoken");
const assert = require("assert");
const Definer = require("../lib/ mistake");

let memberController = module.exports;

memberController.signup = async (req, res) => {
  try {
    console.log("POST:cont/signup");
    const data = req.body;
    console.log("body:", data);
    const member = new Member();
    const new_member = await member.signupData(data);
    console.log(new_member);
    const token = memberController.createToken(new_member);
    console.log(token);

    res.cookie("access_token", token, {
      maxAge: 6 * 3600 * 1000,
      httpOnly: true,
    });
    res.json({ state: "succeed", data: new_member });
  } catch (err) {
    console.log(`ERROR, cont/signup, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

memberController.login = async (req, res) => {
  try {
    console.log("POST:cont/login");
    const data = req.body;
    const member = new Member();
    const result = await member.loginData(data);
    console.log(result);
    const token = memberController.createToken(result);
    console.log(token);

    res.cookie("access_token", token, {
      maxAge: 6 * 3600 * 1000,
      httpOnly: true,
    });

    res.json({ state: "succeed", data: result });
  } catch (err) {
    console.log(`ERROR, cont/login, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

memberController.createToken = (result) => {
  try {
    const upload_data = {
      _id: result._id,
      mb_nick: result._mb_nick,
      mb_type: result._mb_type,
    };

    const token = jwt.sign(upload_data, process.env.SECRET_TOKEN, {
      expiresIn: "6h",
    });

    assert.ok(token, Definer.auth_err2);
    return token;
  } catch (err) {
    throw err;
  }
};

memberController.logout = (req, res) => {
  console.log("GET cont.home");
  res.send("you are at logout");
};
