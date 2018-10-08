export default class SantaLogic {

  static isSantaAllowed(santa, santee) {
    let valid = true;
    santa.restrictions.forEach((restriction) => {
      if( santee.name === restriction) {
        valid = false
      }
    })
    return valid
  }

  static countCombinationsForParent(parent, people, root) {
    let orphans = people.filter((person) => { return person.name !== parent.name })
    let count = 0;
    if(people.length === 1) {
      if(SantaLogic.isSantaAllowed(people[0], root)){
        return 1
      }
      return 0
    }
    orphans.forEach((orphan) => {
      if(SantaLogic.isSantaAllowed(parent, orphan)) {
        count += SantaLogic.countCombinationsForParent(orphan, orphans, root)
      }
    })
    return count
  }

  static appendParent(parent, combination) {
    if(combination.length === 0) {
      return []
    }
    return [parent.name, ...combination]
  }
  static createSantaSanteeChain(parent, people, root) {
    let orphans = people.filter((person) => { return person.name !== parent.name })
    let combs = []
    let combination;
    if(people.length === 1) {
      if(SantaLogic.isSantaAllowed(people[0], root)){
        return [people[0].name]
      }
      return []
    }
    orphans.forEach((orphan) => {
      if(SantaLogic.isSantaAllowed(parent, orphan)) {
        combination = SantaLogic.appendParent(parent, SantaLogic.createSantaSanteeChain(orphan, orphans, root))
        if(combination.length !== 0) {
          combs = [...combs, combination]
        }
      }
    })
    if(combs.length === 0) {
      return []
    }
    return combs[Math.floor(Math.random()*combs.length)]
  }

  static countValidCombinations(people) {
    let peopleDetails = people.map((person, index) => { return { name: person.name, restrictions: person.restrictions || []} } )
    let root = peopleDetails[0]
    return SantaLogic.countCombinationsForParent(root, peopleDetails, root);
  }

  static getSantaSanteeChain(people) {
    let peopleDetails = people.map((person, index) => { return { name: person.name, restrictions: person.restrictions || []} } )
    let root = peopleDetails[0]
    return SantaLogic.createSantaSanteeChain(root, peopleDetails, root);
  }
}
