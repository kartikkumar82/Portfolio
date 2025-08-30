export function calculateMean(data) {
  const total = data.reduce((acc, value) => acc + value, 0);
  return total / data.length;
}

export function calculateMedian(data) {
  const sorted = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function calculateMode(data) {
  const frequency = {};
  let maxFreq = 0;
  let modes = [];

  data.forEach(value => {
    frequency[value] = (frequency[value] || 0) + 1;
    if (frequency[value] > maxFreq) {
      maxFreq = frequency[value];
    }
  });

  for (const key in frequency) {
    if (frequency[key] === maxFreq) {
      modes.push(key);
    }
  }

  return modes;
}

export function normalizeData(data) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  return data.map(value => (value - min) / (max - min));
}