import React,{PureComponent} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';

class Topic extends PureComponent{
    render(){
        return(
            <TopicWrapper>
                {
                    this.props.topicList.map((item)=>{
                        return (
                            <TopicItem key={item.get("id")}>
                                <img className="topic-img" src={item.get("imgUrl")} alt=""/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        topicList:state.get("home").get("topicList")
    };
}

export default connect(mapStateToProps,null)(Topic);