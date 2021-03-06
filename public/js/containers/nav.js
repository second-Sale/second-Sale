import {connect} from 'react-redux';
import Nav from '../components/nav';

const mapStateToProps=(state)=>{
    console.log('nav state:    ',state);
    return {
        loginUser:state.login.loginUser,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {logoutUser:()=>{
        dispatch({type:'LOGOUT'});
    }}
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav);