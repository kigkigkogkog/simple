import React,{Component}from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,SearchInfo,SearchInfoTitle,SearchInfoSwitch,
    SearchInfoList,SearchInfoItem,Operation,Button} from './style'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import  * as actionCreators from './store/actionCreators';
import * as loginActionCreators from '../../pages/login/store/actionCreators';
import {Link} from 'react-router-dom';


class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    {
                        this.props.login ? <NavItem className="right" onClick={this.props.logout}>退出</NavItem> : 
                        <Link to='/login'>
                            <NavItem className="right">登录</NavItem>
                        </Link>
                    }
                    
                    <SearchWrapper>
                        <CSSTransition in={this.props.focus} timeout={200} classNames="slide">
                            <NavSearch className={this.props.focus ? "focus" : ""}
                                onFocus={() => {this.props.inputFocus(this.props.list)}} onBlur={this.props.inputBlur}
                                placeholder="搜索"></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focus ? "focus iconfont zoom" : "iconfont zoom"}>&#xe620;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Operation>
                    <Link to="/write">
                        <Button className="write">
                            <i className="iconfont">&#xe625;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>   
                </Operation>
            </HeaderWrapper>
        )
    }

    getListArea(){
        const {focus,list,page,totalPage,mouseEnter,mouseLeave,mouseIn,changePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page - 1)*10; i<page*10; i++){
                pageList.push(
                    <SearchInfoItem kew={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }   

        if(focus || mouseIn){
            return(
                <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => changePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe607;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        focus:state.get("header").get("focus"),
        list:state.get("header").get("list"),
        page:state.get("header").get("page"),
        totalPage:state.get("header").get("totalPage"),
        mouseIn:state.get("header").get("mouseIn"),
        login:state.get("login").get("login")
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        inputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getSearchList())
            }
            dispatch(actionCreators.inputFocus());
        },
        inputBlur(){
            dispatch(actionCreators.inputBlur());
        },
        mouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        mouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        logout(){
            dispatch(loginActionCreators.logout())
        },
        changePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
            if(originAngle){
                originAngle = parseInt(originAngle);
            }else{
                originAngle = 0;
            }
            spin.style.transform = "rotate("+(originAngle+360)+"deg)";
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);