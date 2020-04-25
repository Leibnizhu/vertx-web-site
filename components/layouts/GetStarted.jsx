import Guide from "./Guide"
import "./GetStarted.scss"

export default (props) => (
  <Guide {...props}>
    <div className="get-started">
      {props.children}
    </div>
  </Guide>
)
