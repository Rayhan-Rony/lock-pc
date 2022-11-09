import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `Lock Pc -${title}`
    }, [title])
}
export default UseTitle