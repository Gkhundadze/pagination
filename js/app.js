let cardsArrey = [
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
        title: 'მეხუთე',
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
    {
        id: 22,
        title: 'ოცდამეორე',
        description: 'ოცდამეორე description'
    },
    {
        id: 23,
        title: 'ოცდამესამე',
        description: 'ოცდამესამე description'
    },
    {
        id: 24,
        title: 'ოცდამეოთხე',
        description: 'ოცდამეოთხე description'
    },
]
const wrapper = document.querySelector('.wrapper')

const paginationWrapper = document.querySelector('.pagination-wrapper')
let pagination = []
const itemsOnPage = 6

//generating pagination buttons based on data length
for (let i = 1; i <= cardsArrey.length/itemsOnPage; i++) {
    let paginationBtn = document.createElement('button')
    paginationBtn.setAttribute('class', 'page-number')
    paginationBtn.innerText = i
    paginationWrapper.append(paginationBtn)
    pagination.push(paginationBtn)
}
//generating pagination buttons based on data length


let activePageButton;
pagination.forEach(page => {
    page.addEventListener('click', () => {
        if(activePageButton) {
            activePageButton.classList.remove('active')
        }
        activePageButton = page
        page.classList.add('active')
        let parsedPageNumber = parseInt(page.innerHTML)
        let start = (parsedPageNumber -1) * itemsOnPage
        let end = start + itemsOnPage
        let itemsToShow = cardsArrey.slice(start, end)
        wrapper.innerHTML = ''
        renderItems(itemsToShow)
    })
})

// initiate first page on window load
window.onload = () => {
    document.querySelector('.page-number').click()
}
// initiate first page on window load



// rendering cards
function renderItems(itemsArrey) {
    itemsArrey.forEach((item) => {
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
}
// rendering cards