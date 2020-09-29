const handleSearch = (event, arr) => {
    const newQueriedItems = arr.filter(candy => candy.productName.toLowerCase().includes(event.target.value.toLowerCase()))
    return newQueriedItems
}

export default handleSearch