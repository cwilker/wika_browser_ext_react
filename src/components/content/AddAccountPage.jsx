import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";
import YourAccount from "./Account";

class AddAccountPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className='mainContent bodyLabel'>
        <div className='mainInside' >
          <YourAccount toggleAccountMenu={this.context.toggleAccountMenu} account={ this.context.addAccount } page={this.context.page} />
          <div style={{paddingTop:25}}>
            <div style={{padding:5}}>
              EXISTING 12 OR 24 WORD MNEMONIC SEED
            </div>
            <div>
              <textarea id='importSeed' defaultValue=''
                type='text' className='seedBox' 
              />
            </div>
            <div 
              style={{float: 'right', padding:'10px 10px 10px 0px'}}
              onClick={() => {
                this.context.setAccount(document.getElementById('importSeed').value)
                }
              }
            >
              <Button className='mainButton bodyCopy' 
                style={{width:'100px'}}
                content={
                  <div style={{fontWeight: 'light', textAlign:'center', padding:'8px', color:'white'}}>
                    Import
                  </div>
                }
              />
            </div>
            <div  style={{paddingTop:'20px', cursor: 'pointer'}}
              onClick={this.context.copyElement('importSeed')}
            >
              <img style={{float:'left', position:'relative', top:'-10px', paddingRight:'10px', cursor:'pointer'}} src='dist/images/extension/Outline/Files/Copy.svg'></img>
              COPY TO CLIPBOARD
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddAccountPage;



// import React from "react";
// import YourAccount from "./Account";
// import Button from './../Button';

// const AddAccountPage = (context, copyElement, setAccount) => {

//   return (
//     <div className='mainContent bodyLabel'>
//       <div className='mainInside' >
//         <YourAccount toggleAccountMenu={context.toggleAccountMenu} account={ context.addAccount } page={context.page} />
//         <div style={{paddingTop:25}}>
//           <div style={{padding:5}}>
//             EXISTING 12 OR 24 WORD MNEMONIC SEED
//           </div>
//           <div>
//             <textarea id='importSeed' defaultValue=''
//               type='text' className='seedBox' 
//             />
//           </div>
//           <div 
//             style={{float: 'right', padding:'10px 10px 10px 0px'}}
//             onClick={() => {
//               setAccount(document.getElementById('importSeed').value)
//               }
//             }
//           >
//             <Button className='mainButton bodyCopy' 
//               style={{width:'100px'}}
//               content={
//                 <div style={{fontWeight: 'light', textAlign:'center', padding:'8px', color:'white'}}>
//                   Import
//                 </div>
//               }
//             />
//           </div>
//           <div  style={{paddingTop:'20px', cursor: 'pointer'}}
//             onClick={copyElement('importSeed')}
//           >
//             <img style={{float:'left', position:'relative', top:'-10px', paddingRight:'10px', cursor:'pointer'}} src='dist/images/extension/Outline/Files/Copy.svg'></img>
//             COPY TO CLIPBOARD
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddAccountPage;