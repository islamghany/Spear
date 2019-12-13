import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchClothes,getUser,getInfo} from './actions/index';

 class LoadingPage extends Component {
    
    componentDidMount(){
        if (this.props.clothesLoading === undefined) {
            this.props.fetchClothes();
          }
          if(this.props.userLoading === undefined) {
            this.props.getUser();
          }
    }
    componentWillReceiveProps(nextProps){
           if (Object.keys(this.props.user).length===0  && this.props.currentUser && this.props.currentUser.uid ){
             this.props.getInfo(this.props.currentUser.uid);
           }

        if (nextProps.notesLoading === -1 ) {
            this.props.fetchClothes();
          }
    }
    render() {
        const {clothesLoading,children}=this.props;
       if(!clothesLoading && this.props.user){
       return <div>{children}</div>
       } 
       else{
        return (
            <div className="loading">
               <section>
                  <div class='sk-double-bounce'>
                    <div class='sk-child sk-double-bounce-1'></div>
                    <div class='sk-child sk-double-bounce-2'></div>
                  </div>
                </section>
            </div>
        )
    }
}
}
const mapState=(state)=>{
    return{

      currentUser:state.currentUser, 
      clothesLoading:state.loading.clothes,
      userLoading:state.loading.clothes,
      user:state.user
    }
}
export default connect(mapState,{fetchClothes,getUser,getInfo})(LoadingPage);
