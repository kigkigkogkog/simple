import React,{PureComponent} from 'react';
import {WriterWrapper,WriterItem} from '../style';
import {connect} from 'react-redux';

class Writer extends PureComponent{
    render(){
        return(
            <WriterWrapper>
                <div className="title">推荐作者</div>
                {
                    this.props.writerList.map((item)=>{
                        return(
                            <WriterItem key={item.get("id")}>
                                <img className="writer-img" src={item.get("imgUrl")} alt=""/>
                                <div className="follow">+关注</div>
                                <span className="title">{item.get("author")}</span>
                                <p className="total">{item.get("word")}</p>
                            </WriterItem>
                        )
                    })
                }               
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        writerList:state.get("home").get("writerList")
    };
}

export default connect(mapStateToProps,null)(Writer);