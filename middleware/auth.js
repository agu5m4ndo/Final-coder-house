const admin = true;

const auth = (req, res, next) => {
    if (admin) {
        return next();
    }
    res.status(401).json({ error: -1, descripcion: `Ruta ${req.originalUrl}, método ${req.method} no autorizado` })
}

module.exports = auth;