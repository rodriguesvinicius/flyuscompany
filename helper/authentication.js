module.exports = {
    deslogado: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Você precisa estar Logado!');
        res.redirect('/');
    }
};