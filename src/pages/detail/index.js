import React,{Component} from 'react';
import {DetailWrapper,Title,Content} from './style';
import {connect} from 'react-redux';
import  * as actionCreators from './store/actionCreators';
import {withRouter} from 'react-router-dom';

class Detail extends Component{
    render(){
        return(
            <DetailWrapper>
                {
                    this.props.detailList.map((item)=>{
                        return(
                            <div key={item.get("id")}>
                                <Title>  {item.get("title")} </Title>
                                <Content
                                    dangerouslySetInnerHTML={{__html:item.get("content")}}>
                                </Content>
                            </div>
                        )
                    })
                }
                
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) =>{
    return{
        detailList:state.get("detail").get("detailList")
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getDetail(id){
            dispatch(actionCreators.getDetailList(id))
        }    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));