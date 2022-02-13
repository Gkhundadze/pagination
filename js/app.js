let cardsArrey = [
    {
        id: 0,
        title: 'მენულე',
        description: 'მენულე description'
    },
    {
        id: 1,
        title: 'პირველი',
        description: 'პირველი description'
    },
    {
        id: 2,
        title: 'მეორე',
        description: 'მეორე description'
    },
    {
        id: 3,
        title: 'მესამე',
        description: 'მესამე description'
    },
    {
        id: 4,
        title: 'მეოთხე',
        description: 'მეოთხე description'
    },
    {
        id: 5,
        title: 'მეუთე',
        description: 'მეუთე description'
    },
    {
        id: 6,
        title: 'მეექვსე',
        description: 'მეექვსე description'
    },
    {
        id: 7,
        title: 'მეშვიდე',
        description: 'მეშვიდე description'
    },
    {
        id: 8,
        title: 'მერვე',
        description: 'მერვე description'
    },
    {
        id: 9,
        title: 'მეცხრე',
        description: 'მეცხრე description'
    },
    {
        id: 10,
        title: 'მეათე',
        description: 'მეათე description'
    },
    {
        id: 11,
        title: 'მეთერთმეტე',
        description: 'მეთერთმეტე description'
    },
    {
        id: 12,
        title: 'მეთორმეტე',
        description: 'მეთორმეტე description'
    },
    {
        id: 13,
        title: 'მეცამეტე',
        description: 'მეცამეტე description'
    },
    {
        id: 14,
        title: 'მეთოთხმეტე',
        description: 'მეთოთხმეტე description'
    },
    {
        id: 15,
        title: 'მეთხუთმეტე',
        description: 'მეთხუთმეტე description'
    },
    {
        id: 16,
        title: 'მეთექვსმეტე',
        description: 'მეთექვსმეტე description'
    },
    {
        id: 17,
        title: 'მეჩვიდმეტე',
        description: 'მეჩვიდმეტე description'
    },
    {
        id: 18,
        title: 'მეთვრამეტე',
        description: 'მეთვრამეტე description'
    },
    {
        id: 19,
        title: 'მეცხრამეტე',
        description: 'მეცხრამეტე description'
    },
    {
        id: 20,
        title: 'მეოცე',
        description: 'მეოცე description'
    },
    {
        id: 21,
        title: 'ოცდამეერთე',
        description: 'ოცდამეერთე description'
    },
]
const wrapper = document.querySelector('.wrapper')


cardsArrey.forEach((item) => {
    let title = item.title
    let description = item.description
    let card = document.createElement('div')
    card.setAttribute('class', 'card')

    let cardHeading = document.createElement('h3')
    cardHeading.setAttribute('class', 'title')
    cardHeading.innerText = title

    let cardBody = document.createElement('p')
    cardBody.setAttribute('class', 'body')
    cardBody.innerText = description

    card.append(cardHeading,cardBody)
    wrapper.append(card)


})