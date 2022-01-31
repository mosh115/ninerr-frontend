
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType, delay = 600) {
    if (entityType === 'user') {

        var entities = JSON.parse(localStorage.getItem(entityType)) || _createUsers()
    } else {

        var entities = JSON.parse(localStorage.getItem(entityType)) || _createGigs()
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    // return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}
function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _createGigs() {
    console.log('creating demo gigs')

    const gigs = [
        {
            _id: _makeId(),
            title: "I will design your logo",
            price: 12,
            seller: {
                _id: "u101",
                fullname: "Dudu Da",
                avatarUrl: "url",
                level: "Level 2 Seller",
                rate: 4.0,
                raters: 4067,
            },
            daysToMake: 3,
            description: "Make unique logo...",
            imgUrls: [],
            categories: [
                "logo-design",
                "artisitic",
                "proffesional",
                "accessible"
            ]
        },
        {
            _id: _makeId(),
            title: "I will design your website",
            price: 500,
            seller: {
                _id: "u102",
                fullname: "Puki Ma",
                avatarUrl: "url",
                level: "Top Rated Seller",
                rate: 4.7,
                raters: 562,
            },
            daysToMake: 7,
            description: "Make unique website...",
            imgUrls: [],
            categories: [
                "logo-design",
                "artisitic",
                "proffesional",
                "accessible"
            ]
        }
    ]

    localStorage.setItem('gig', JSON.stringify(gigs))
    return gigs
}
function _createUsers() {
    console.log('creating demo users')

    const users = [
        {
            _id: "u101",
            fullname: "digitalredcube",
            imgUrl: "/img/img1.jpg",
            // isAdmin: false,
            username: "digitalredcube",
            password: "secret",
            isSeller: false,

            level: "",
            reviews: [
                {
                    id: _makeId(),
                    txt: "This is the second project that I have completed with the provider dubbed yourhighness. I can confidently say If you are looking for a professional voice-over that will take your production to the next level, look no further. Being a professional myself I understand the value of working with someone as responsive as he has been. If things keep progressing I have plans of putting him on the payroll so you better act fast!",
                    rate: 4,
                    by: {
                        _id: "u101",
                        fullname: "dearjerber",
                        imgUrl: "/img/img2.jpg"
                    }
                },
                {
                    id: _makeId(),
                    txt: "In the restaurant industry, success hinges on service and quality. So when we needed VOs for broadcast to promote a local food and beverage event, we hit Sean up with our short order. He delivered on tone, on quality and on time. And when we had a minor script change, his response was prompt, not missing a beat. The results sizzle!",
                    rate: 5,
                    by: {
                        _id: "u102",
                        fullname: "rogarguello",
                        imgUrl: "/img/img2.jpg"
                    }
                },
                {
                    id: _makeId(),
                    txt: "Second time working with yourhighness and it definitely won't be the last as I plan on working with him at least 8,642 more times! He must also work as a mind-reader, cause he always seems to know exactly how you want it to be read without saying it!",
                    rate: 5,
                    by: {
                        _id: "u103",
                        fullname: "Ben Sherman",
                        imgUrl: "/img/img2.jpg"
                    }
                }
            ],
        },
        {
            _id: "u102",
            fullname: "jessica56",
            imgUrl: "/img/img1.jpg",
            // isAdmin: false,
            username: "jessica56",
            password: "secret",
            isSeller: false,

            level: "basic/premium",
            reviews: [
                {
                    id: _makeId(),
                    txt: "This is the second project that I have completed with the provider dubbed yourhighness. I can confidently say If you are looking for a professional voice-over that will take your production to the next level, look no further. Being a professional myself I understand the value of working with someone as responsive as he has been. If things keep progressing I have plans of putting him on the payroll so you better act fast!",
                    rate: 4,
                    by: {
                        _id: "u101",
                        fullname: "dearjerber",
                        imgUrl: "/img/img2.jpg"
                    }
                },
                {
                    id: _makeId(),
                    txt: "In the restaurant industry, success hinges on service and quality. So when we needed VOs for broadcast to promote a local food and beverage event, we hit Sean up with our short order. He delivered on tone, on quality and on time. And when we had a minor script change, his response was prompt, not missing a beat. The results sizzle!",
                    rate: 5,
                    by: {
                        _id: "u102",
                        fullname: "rogarguello",
                        imgUrl: "/img/img2.jpg"
                    }
                },
                {
                    id: _makeId(),
                    txt: "Second time working with yourhighness and it definitely won't be the last as I plan on working with him at least 8,642 more times! He must also work as a mind-reader, cause he always seems to know exactly how you want it to be read without saying it!",
                    rate: 5,
                    by: {
                        _id: "u103",
                        fullname: "Ben Sherman",
                        imgUrl: "/img/img2.jpg"
                    }
                }
            ],
        }

    ]


    localStorage.setItem('user', JSON.stringify(users))
    return users
}