/**
 * Define as posições possíveis dos jogadores.
 * GK = Goleiro (Goalkeeper)
 * DEF = Defensor
 * MID = Meio-campista
 * FW = Atacante (Forward)
 */

export type PlayerPosition = "GK" | "DEF" | "MID" | "FW";

/**
 * Define as habilidades (skills) de um jogador.
 * Usamos números (ex: 1-100) para facilitar a simulação.
 */

export interface PlayerSkills {
  speed: number; // Velocidade
  shooting: number; // Finalização
  passing: number; // Passe
  dribbling: number; // Drible
  defending: number; // Defesa
  physical: number; // Físico
}

/**
 * A entidade principal do Jogador.
 */

export interface Player {
  id: string;
  name: string;
  age: number;
  position: PlayerPosition;
  skills: PlayerSkills;
  currentTeamId: string | null; // ID do time atual, null se estiver sem time
}
