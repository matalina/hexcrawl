function statModifier(value) {
  const mod = Math.floor(value / 2) - 5;
  return mod >= 0 ? `+${mod}` : mod;
}

function pB(value) {
  return `+${Math.floor(value / 4) + 2}`;
}

function skillMod(level, value, prof) {
  let mod = statModifier(value);
  if (prof) mod = parseInt(mod) + parseInt(pB(level));
  return mod >= 0 ? `+${mod}` : mod;
}

module.exports = {
  statModifier,
  pB,
  skillMod,
};