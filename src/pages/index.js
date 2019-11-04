import Redirect from 'umi/redirect'
export default function(props){
    return(
        <div>
            <Redirect from='/' to='/home'></Redirect>
        </div>
    )
}
