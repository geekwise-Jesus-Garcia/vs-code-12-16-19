// // Native Imports
// import { Link, Redirect } from 'react-router-dom'

// // Icons
// import { MdAccountBalance } from 'react-icons/md';
// import { FaHome } from 'react-icons/fa';
// import { FaUserLock } from 'react-icons/fa';
// import { MdAssignmentInd } from 'react-icons/md';
// import { FaRegCreditCard } from 'react-icons/fa';
// import { IoIosPeople } from 'react-icons/io'
// // ############################
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { logout } from "../../actions/auth";
// import {AuthContext} from '../../context/AuthProvider';
// import { FaHome } from 'react-icons/fa';



// // Context
// import { AuthContext } from '../../context/AuthProvider'

// // Auth Actions
// import { getAuthLevel } from '../../actions/authActions'

// export class SideBar extends Component {
//     static contextType = AuthContext

//     render() {
//         const { auth } = this.context
//         const { isAuthenticated } = auth

//         const links = (
//             <Fragment>
//                 { getAuthLevel(auth) === 3 ? (
//                     <Link style={this.linkStyle} to="/admin">
//                         <IoIosPeople size={'32px'}/> 
//                     </Link>
//                 ) : null }

//                 { getAuthLevel(auth) >= 2 ? (
//                 <Fragment>
//                     <Link style={this.linkStyle} to="/branches">
//                         <MdAccountBalance size={'32px'}/>
//                     </Link>
//                     <Link style={this.linkStyle} to="/holders">
//                         <FaUserLock size={'32px'}/>
//                     </Link>
//                     <Link style={this.linkStyle} to="/accounts">
//                         <MdAssignmentInd size={'32px'}/>
//                     </Link>
//                 </Fragment>
//                 ) : null }

//                 { isAuthenticated ? (
//                 <Link style={this.linkStyle} to="/products">
//                     <FaRegCreditCard size={'32px'}/>
//                 </Link>
//                 ) : <Redirect to="/" />}
//             </Fragment>
//         )

//         const outputLinks = () => {
//             if (isAuthenticated) {
//                 return (
//                     <Fragment>
//                         { links }
//                     </Fragment>
//                 )
//             } else {
//                 return <Redirect to="/"/>
//             }
//         }

//         return (
//             <div style={this.sideBarContainerStyle}>
//                 <div style={this.sideBarContentStyle}>
//                     <Link style={this.linkStyle} to="/">
//                         <FaHome size={'32px'}/>
//                     </Link>
//                     {outputLinks()}
//                 </div>
//             </div>
//         )
//     }

//     sideBarContainerStyle = {
//         maxWidth: '60px',
//         minWidth: '60px',
//         backgroundColor: '#1f98d9',
//         position: 'relative',
//         zIndex: '0',
//         top: '0',
//         minHeight: '100vh',
//     }

//     sideBarContentStyle = {
//         position: 'sticky',
//         top: '55px',
//         display: 'flex',
//         flexDirection: 'column'
//     }

//     linkStyle = {
//         color: 'white',
//         textAlign: 'center',
//         margin: '10px 0',
//     }
// }

// export default SideBar