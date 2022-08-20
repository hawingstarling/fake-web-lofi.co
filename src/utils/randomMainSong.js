

const prevSong = (list, currentIndex) => {
    let newIndex
    if (currentIndex > list.length - 1 || currentIndex <= 0) {
        newIndex = list.length - 1
    } else {
        newIndex = currentIndex - 1
    }
    return {
        index: newIndex,
        link: list[newIndex]
    }
}

const nextSong = (list, currentIndex) => {
    let newIndex
    if (currentIndex > list.length - 1 || currentIndex <= 0) {
        newIndex = list.length - 1
    } else {
        newIndex = currentIndex + 1
    }
    return {
        index: newIndex,
        link: list[newIndex]
    }
}

export { prevSong, nextSong }