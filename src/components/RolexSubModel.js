import React from 'react'

const rotate = {
   borderRadius: "50%",
   position: "fixed",
   background: "-moz-linear-gradient(left, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0) 48%, rgba(2,2,2,1) 100%)", /* FF3.6-15 */
   background: "-webkit-linear-gradient(left, rgba(0,0,0,0.65) 0%,rgba(255,255,255,0) 48%,rgba(2,2,2,1) 100%)", /* Chrome10-25,Safari5.1-6 */
   background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(255,255,255,0) 48%,rgba(2,2,2,1) 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
   filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#020202',GradientType=1 )", /* IE6-9 */
   flex: "0 0 calc(16.66% - 20px)",
   padding:"10px",
   // topMargin:"50px",
   height: "50%",
   marginTop: "15%"

}



const RolexSubModel = (props) => {
  // debugger;
    return (
        <img style={rotate} src={props.model[0].image_url} />
   )
 }



export default RolexSubModel
