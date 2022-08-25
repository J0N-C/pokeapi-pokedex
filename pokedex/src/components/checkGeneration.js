function checkGeneration (items, limit) {
  return items.filter(item => parseInt((item.pokemon.url).match(/\/([0-9]+)\//)[1]) <= limit)
}

export default checkGeneration;
