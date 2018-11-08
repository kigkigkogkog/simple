import React,{Component} from 'react';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {connect} from 'react-redux';
import  * as actionCreators from './store/actionCreators';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    render(){
        if(!this.props.login){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" innerRef={(input)=>{this.account=input}}/>
                        <Input placeholder="密码" type="password" innerRef={(input)=>{this.password=input}}/>
                        <Button onClick={()=>this.props.loginClick(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/"></Redirect>
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        login:state.get("login").get('login')
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{   
        loginClick(account,password){
            dispatch(actionCreators.login(account,password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);