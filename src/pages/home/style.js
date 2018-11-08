import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
    float:left;
    padding:30px 0 0 15px;
    width:625px;
    .banner-img{
        width:100%;
        heigth:270px;
    }
`

export const HomeRight = styled.div`
    float:right;
    width:280px;
`;

export const BackTop = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    right:50px;
    bottom:50px;
    font-size:18px;
    cursor:pointer;
    :hover{
        background-color:red;
    }
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-10px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    font-size:14px;
    background-color:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin:0 0 18px 18px;
    .topic-img{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .list-img{
        display:block;
        height:100px;
        width:125px;
        float:right;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        color:#999;
        line-height:24px;
    }
    .hot{
        font-size:12px;
        margin-right:10px;
        color:#b4b4b4;
    }
    a{
        text-decoration:none;
    }
    a:hover{
        text-decoration:underline;
    }
`;

export const LoadMore = styled.div`
    width：100%;
    height:40px;
    line-height:40px;
    background-color:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`

export const RecommendItem = styled.div`
    :first-child{
        margin-top:30px;
    }
    margin-bottom:6px;
    width:280px;
    height:50px;
    background-image:url(${(props)=>props.imgUrl});
    background-size:contain;
`

export const WriterWrapper = styled.div`
    overflow:hidden;
    width:278px;
    font-size:13px;
    text-align:center;
    .title{
        text-align:left;
        font-size:14px;
        color:#969696;
    }
`

export const WriterItem = styled.div`
    margin-top:15px;
    text-align:left;
    width:280px;
    height:47px;
    .writer-img{
        width:48px;
        height:48px;
        margin-right:10px;
        float:left;
        border:1px solid #ddd;
        border-radius:50%;
    }
    .follow{
        float:right;
        margin:15px 10px 0 0;
        padding:0;
        font-size:16px;
        color:#42c021;
    }
    .title{
        padding-top:5px;
        margin-right:60px;
        font-size:14px;
        display:block;
        color:#333;
    }
    .total{
        margin-top:2px;
        font-size:12px;
        color:#969696;
    }
`