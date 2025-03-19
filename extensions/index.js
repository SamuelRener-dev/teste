module.exports = function registerExtensions({ services }) {
    // Registra o endpoint personalizado
    require('./endpoints/jovens')(this);

    // Registra o hook de nome
    require('./hooks/uppercase-nome')(this);
};
