import Chance from 'chance'

// Chance is a random generator that can be used to generate random data
// for testing purposes. It is a great tool for generating random data
// for testing purposes.
// chance 패키지는 다양한 종류의 그럴듯한 가짜 데이터를 제공해줌

const chance = new Chance()

export const randomUUID = (): string => chance.guid()
export const randomName = (): string => chance.name()
export const randomEmail = (): string => chance.email()
export const randomId = (): string => chance.fbid()
export const randomJobTitle = (): string => chance.profession()
export const randomSentence = (words = 5): string => chance.sentence({words})
export const randomTitleText = (words = 3): string => chance.sentence({words})
export const randomParagraphs = (sentences = 3): string =>
  chance.paragraph({sentences})
