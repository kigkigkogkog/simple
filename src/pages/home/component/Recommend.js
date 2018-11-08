import React,{PureComponent} from 'react';
import {RecommendWrapper,RecommendItem} from '../style';

class Recommend extends PureComponent{
    render(){
        return(
            <RecommendWrapper>
                <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"></RecommendItem>
                <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"></RecommendItem>
                <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"></RecommendItem>
            </RecommendWrapper>
        )
    }
}

export default Recommend;