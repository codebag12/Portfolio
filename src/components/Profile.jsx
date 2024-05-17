import './Profile.css'
import WorkExperience from './WorkExperience'

const Profile = (props) => {
    const css = {
        color:'white'
    }
    console.log(props);
    return(
        <div>
    <h1 style={css}>
      My profile details
    </h1>

    <p>
      Name : {props.name}
    </p>


    <p>
      position : {props.position}
    </p>

    <p>
      company : netflix
    </p>
    <WorkExperience experiences1={props.experiences} />
    </div>
    )
}

export default Profile