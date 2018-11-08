import React,{PureComponent} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import  * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';

class List extends PureComponent{
    render(){
        return( 
            <div>
                {         
                    this.props.listList.map((item)=>{
                        return(
                            
                            <ListItem>
                                <img className="list-img" src={item.get("imgUrl")} alt=""/>
                                <ListInfo>
                                    <Link key={item.get("id")} to={"/detail/" + item.get("id")}>
                                        <h3 className="title">{item.get("title")}</h3>
                                    </Link>
                                    <p className="desc">{item.get("desc")}</p>
                                    <span className="hot">{item.get("author")}</span>
                                    <span className="hot">
                                        <i className="iconfont">&#xe606;</i>
                                        {item.get("comment")}
                                    </span>
                                    <span className="hot">
                                        <i className="iconfont">&#xe741;</i>
                                        {item.get("like")}
                                    </span>
                                    <span className="hot">
                                        <i className="iconfont">&#xe602;</i>
                                        {item.get("money")}
                                    </span>
                                </ListInfo>
                            </ListItem>
                            
                        );
                    })   
                }    
                <LoadMore onClick={this.props.getMore}>阅读更多</LoadMore> 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        listList:state.get("home").get("listList")
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getMore(){
            dispatch(actionCreators.getMoreList())
        }       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);