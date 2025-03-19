// extensions/hooks/uppercase-nome/index.js

module.exports = function registerHook({ actions }) {
    actions('create', 'update').before('items.create', async ({ payload }) => {
      if (payload.nome && payload.nome !== payload.nome.toUpperCase()) {
        payload.nome = payload.nome.toUpperCase(); // Converte o nome para maiúsculas
      }
      return payload;
    });
  };
  