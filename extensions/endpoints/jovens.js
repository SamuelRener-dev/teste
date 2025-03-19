// extensions/endpoints/jovens/index.js

module.exports = function registerEndpoint({ services, database }) {
    const { ItemsService } = services;
  
    // Registra o endpoint "/jovens/ativos"
    this.get('/jovens/ativos', async (req, res) => {
      try {
        // Consulta todos os registros da coleção 'jovens' com status 'ativo' e ordenados pela data de criação
        const jovensService = new ItemsService('jovens', { database });
  
        const jovensAtivos = await jovensService.readByQuery({
          filter: {
            ativo: { _eq: true } // Filtra os registros com o campo "ativo" igual a true
          },
          sort: ['data_criacao'], // Ordena pela data de criação, do mais recente para o mais antigo
        });
  
        return res.json(jovensAtivos);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro ao buscar dados.' });
      }
    });
  };
  