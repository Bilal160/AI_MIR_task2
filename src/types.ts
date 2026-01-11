
export enum ViewType {
  EXECUTIVE_SUMMARY = 'Executive Summary',
  HEATMAP_VIEW = 'Heatmap View',
  COMMENTS_REPORT = 'Comments Report',
  STATEMENT_LEVEL_VIEW = 'Statement Level View',
  PRIORITY_MATRIX_VIEW = 'Priority Matrix View',
}

export type Sentiment = 'positive' | 'negative' | 'neutral';

export interface Comment {
  id: string;
  text: string;
  sentiment: Sentiment;
  timestamp: string;
  driver: string;
  referenceStatement: string;
}

export interface DriverScore {
  name: string;
  netScore: number;
  favourable: number;
  correlation: {
    discretionaryEffort: number;
    intentToStay: number;
    advocacy: number;
  };
  pScores: {
    p1: number;
    p2: number;
    p3: number;
    p4: number;
    p5: number;
  };
}

export interface FilterState {
  location: string;
  department: string;
  gender: string;
  tenure: string;
  age: string;
}
