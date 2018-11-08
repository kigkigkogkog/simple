import React,{Component} from 'react';
// import {} from './style';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends Component{
    render(){
        if(this.props.loginState){
            return(
                <div></div>
            )
        }else{
            return <Redirect to="/login"></Redirect>
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        loginState:state.get("login").get("login")
    };
}

// const mapDispatchToProps = (dispatch) =>{
//     return{   
//     }
// }

export default connect(mapStateToProps,null)(Write);