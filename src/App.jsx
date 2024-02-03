import Card from "./companents/card"
import { data } from "./utils/data"

const App = () => {
    return <div className="p-3">
        <Card data={data} />
    </div>
}

export default App