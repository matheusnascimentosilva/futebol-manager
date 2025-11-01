import express from 'express';
import cors from 'cors';
import type { Team, Player } from '@futebol-manager/shared-types';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Exemplo de uso dos tipos
const exampleTeam: Team = {
  id: '1',
  name: 'Exemplo FC',
  city: 'São Paulo',
  stadium: 'Estádio Exemplo',
  series: 'A',
  tactics: {
    formation: '4-4-2',
    mentality: 'Balanced'
  },
  players: [],
  coach: 'Técnico Exemplo',
  budget: 50,
  primaryColor: '#FF0000',
  secondaryColor: '#FFFFFF'
};

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    message: 'API do Futebol Manager funcionando!',
    exampleTeam 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});