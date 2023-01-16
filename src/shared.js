export function getTags (minimum = 2, inArr) {
  // I want to display only tags with at least 'minimum' amount of projects
  // I also want to sort them by no. of projects, any other sorting seems irrelevant
  // I may develop this to get "minumum" val from a store.js, or options component
  const tagsCounter = {}
  for (let project of inArr) {
     for (let tag of project.tags) {
        if (tagsCounter[tag]) {
          tagsCounter[tag] += 1
        } else {
          tagsCounter[tag] = 1
        }
     }
  }

  const tagsCounterArr = []
  for (let property in tagsCounter) {
    if (tagsCounter[property] >= minimum) {
      tagsCounterArr.push({
        tag: property,
        value: tagsCounter[property]
      })
    }
  }

  const sorted = tagsCounterArr.sort(function(a, b){
    return b.value - a.value;
  })

  return sorted.map(el => el.tag)
}
