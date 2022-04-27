import styled, {css} from 'styled-components';
import { BodyLabel, BodyCopy, Heading1 } from './textStyle'

const Main = styled.div`
    background: #F9F9F9;
    height: 460px;
    border-top: none;
    border-bottom: none;
    display: flex;
`
const Padder = styled.div`
  padding: ${props => props.padding || '0px'};
  padding-top: ${props => props.paddingTop || props.padding || '0px'};
  padding-left: ${props => props.paddingLeft || props.padding || '0px'};
  padding-right: ${props => props.paddingRight || props.padding || '0px'};
  padding-bottom: ${props => props.paddingBottom || props.padding || '0px'};
`
const MainLabel = styled(Main)`
  ${BodyLabel}
`
const MainHeading = styled(Main)`
  ${Heading1}
`
const SeedBox = styled.textarea`
  position: relative;
  padding: 10px;
  height: 40px;
  background: #FFFFFF;
  outline: solid;
  outline-color: #DFE1E5;
  color:#A77121;
  ${'' /* width: 489px; */}
`

export {
    Main,
    Padder,
    BodyLabel,
    BodyCopy,
    Heading1,
    MainLabel,
    MainHeading,
    SeedBox,
}