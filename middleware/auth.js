const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization')
  const token = authaHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401)

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    req.userId = decoded.userId
    next()
  } catch (error) {
    console.log(error)
    res.sendStatus(403)
  }
}

module.exports = verifyToken