
/**
 *
 *
 * @export
 * @param {*} props
 * @return {*} 
 */
export default function WorkExperience (props) {
  return (
    <>
    <ul>
        <li>{props.experiences1.company_a.name}
        </li>
        <li>company b
        <small>2019-2021</small>
        </li>
        <li>company c
        <small>2019-2021</small>
        </li>
    </ul>

    </>
  )
}
