export const calculateNetScore = (pScores: {
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  p5: number;
}) => {
  const { p1, p2, p4, p5 } = pScores;
  return (p5 * 100 + p4 * 80) - (p1 * 100 + p2 * 80);
};

// Fixed missing property access for p5
export const calculateFavourable = (pScores: {
  p4: number;
  p5: number;
}) => {
  const { p4, p5 } = pScores;
  return p4 + p5;
};

export const getCorrelationLabel = (value: number) => {
  if (value >= 0.7) return 'Strong Positive';
  if (value >= 0.4) return 'Moderate Positive';
  if (value >= 0.1) return 'Weak Positive';
  if (value > -0.1) return 'Neutral';
  if (value > -0.4) return 'Weak Negative';
  if (value > -0.7) return 'Moderate Negative';
  return 'Strong Negative';
};

export const getCorrelationColor = (value: number) => {
  if (value >= 0.7) return 'bg-[#7B61FF] text-white';
  if (value >= 0.4) return 'bg-[#9884FF] text-white';
  if (value >= 0.1) return 'bg-[#D6CFFF] text-slate-800';
  if (value > -0.1) return 'bg-[#F1F5F9] text-slate-500';
  if (value > -0.4) return 'bg-[#FEE2E2] text-slate-800';
  if (value > -0.7) return 'bg-[#FCA5A5] text-white';
  return 'bg-[#EF4444] text-white';
};