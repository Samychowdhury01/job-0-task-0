 const generateId = () => {
    const stringValue = "TASK"
    const randomNumber = Math.floor(1000 + Math.random()* 9000)
    return `${stringValue}-${randomNumber}`
}
export default generateId
