export function generateRandomSeed () {
  const UINT_MAX = 4294967295
  return Math.floor(Math.random() * (UINT_MAX + 1))
}
