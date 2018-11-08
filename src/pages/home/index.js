import React,{PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import {connect} from 'react-redux';
import  * as actionCreators from './store/actionCreators';

class Home extends PureComponent{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4529/d8d780d8dd4a32485655815c2cb4e367b61cb15c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.backTo}><i className="iconfont">&#xe6b6;</i> </BackTop> : null
                } 
            </HomeWrapper>
        )
    }

    backTo(){
        window.scrollTo(0,0);
    }

    bindEvent(){
        window.addEventListener("scroll",this.props.changeTopShow)
    }

    componentDidMount(){
        this.props.getHome();
        this.bindEvent();
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeTopShow)
    }
}

const mapStateToProps = (state) =>{
    return{
        showScroll:state.get("home").get("showScroll")
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getHome(){
            dispatch(actionCreators.getHomeList())
        },
        changeTopShow(e){
            if(e.srcElement.documentElement.scrollTop > 200){
                dispatch(actionCreators.getTopState(true));
            }else{
                dispatch(actionCreators.getTopState(false));
            }
                
        }     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);