import type { Player } from "./player.types.js";

/**
 * As séries do campeonato.
 */

export type TeamSeries = "A" | "B" | "C" | "D";

/**
 * Táticas simples para começar.
 * formation: O esquema tático (ex: 4-4-2)
 * mentality: Como o time se comporta (influencia a simulação)
 */

export interface TeamTactics {
  formation: "4-4-2" | "4-3-3" | "3-5-2" | "5-3-2";
  mentality: "Defensive" | "Balanced" | "Attacking";
}

/**
 * A entidade principal do Time.
 */

export interface Team {
  id: string;
  name: string;
  city: string;
  stadium: string;
  series: TeamSeries;
  tactics: TeamTactics;
  players: Player[];
  coach: string;
  budget: number; // Orçamento do time em milhões
  primaryColor: string; // Cor primária do time (ex: "#FF0000" para vermelho)
  secondaryColor: string; // Cor secundária do time (ex: "#FFFFFF" para branco)
}
