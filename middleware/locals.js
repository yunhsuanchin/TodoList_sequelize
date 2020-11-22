module.exports = {
  locals: (req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated()
    res.locals.user = req.user
    res.locals.warning_msg = req.flash('warning_msg')
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error = req.flash('error')
    next()
  }
}
