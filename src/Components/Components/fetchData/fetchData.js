const fetchData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const result = await response.json()
        return result
    } catch (err) {
        console.log(err)
    }
}
export default fetchData