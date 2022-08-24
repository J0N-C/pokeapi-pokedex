function checkGeneration (items, limit) {
  console.log(items);
  return items.filter(item => parseInt((item.pokemon.url).match(/\/([0-9]+)\//)[1]) <= limit)
}

export default checkGeneration;
