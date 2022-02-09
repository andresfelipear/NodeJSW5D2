require('dotenv').config()
const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = Router()

const { SECRET = "secret" } = process.env

router.post("/signup", async (req, res) => {
    const { User } = req.context.models;
    console.log(User)
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);

      const user = await User.create(req.body);

      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

module.exports = router