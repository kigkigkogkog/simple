import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
    z-index:1;
`;

export const Logo = styled.div`
    width:100px;
    height:56px;
    position:absolute;
    top:0;
    left:0;
    display:block;
    background-image:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.nav`
    width:960px;
    height:100%;
    padding-right:25px;
    box-sizing:border-box;
    margin:0 auto;  
`;

export const NavItem = styled.div`
    font-size:17px;
    line-height:56px;
    padding:0 15px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focus{
            color:#fff;
            background-color:#777;
        }
    }  
    
`;

export const NavSearch = styled.input`
    width:160px;
    height:38px;
    padding:0 35px 0 20PX;
    margin:9px 0 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background-color:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999
    }
    &.focus{
       width:240px; 
    }
    &.slide-enter{
        width:160px;
        transition:width .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:width .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:58px;
    width:240px;
    padding 0 20px;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
    background-color:white;
    &.hide{
        display:none;
    }
    &.show{
        display:block;
    }
`;

export const SearchInfoTitle = styled.div`
    margin:10px 0 15px 0;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:inline-block;
        font-size:12px;
        margin-right:1px;
        transition:transform 0.2s ease-in;
        transform-origin:center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow:hidden;
`;

export const SearchInfoItem = styled.a`
    font-size:12px;
    padding:5px;
    line-height:20px;
    color:#787878;
    border:1px solid #ddd;
    border-radius:3px;
    display:block;
    float:left;
    margin:0 10px 10px 0;
`;

export const Operation = styled.div`
    position:absolute;
    height:56px;
    top:0;
    right:0;
`

export const Button = styled.button`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin:9px 20px 0 0;
    padding:0 20px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
        background-color:white!important;
    }
    &.write{
        color:#fff;
        background-color:#ec6149!important;
    }
`