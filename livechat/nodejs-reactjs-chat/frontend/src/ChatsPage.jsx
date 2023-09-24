import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
     
    return( 
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='7bd55718-4dd9-4d2c-862a-05aa4b3dae85'
                username={props.user.username}
                secret={props.user.username}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage

