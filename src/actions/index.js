import {FETCH_CLOTHES,CLOTHES__STATUS,GET_USER,USER__INFO,USER__STATUS } from './actionTypes'
import {clothesDB,userDB,auth} from '../firebase';
import {toastr} from 'react-redux-toastr'


// get all clothes

export const fetchClothes = () =>{
   return dispatch=>{
       dispatch({
           type:CLOTHES__STATUS,
           payload:true
       });
          clothesDB.on('value',(snapshot)=>{
            dispatch({
                type:FETCH_CLOTHES,
                payload:snapshot.val()
            })
            dispatch({
                type:CLOTHES__STATUS,
                payload:false
            });
        },()=>{ dispatch({
            type:CLOTHES__STATUS,
            payload:-1
        })
          })
    }
}




// add item;

export const addItem= (item)=>{

    return dispatch=>{
        clothesDB.push(item).then((res)=>{
            const newItem ={...item , id:res.key}
            clothesDB.child(res.key).update(newItem);
        }).catch(err=>console.log(err))
    }
}

// add orders;

export const addOrders= (items,uid)=>{

    return dispatch=>{
      userDB.child(uid).child('orders').update({...items});  
      toastr.success('Successful operation', 'Your order will arrive within 14 days ');
      userDB.child(uid).child('cart').remove();
}
}
// sign up new user 

export const register=(user,setSubmitError)=>{
return dispatch=>{
         auth.createUserWithEmailAndPassword(user.email, user.password).then(res=>{

          
             const newUser={...user , id:res.user.uid}
             userDB.child(res.user.uid).update(newUser);
             setSubmitError(false);
             window.location.reload();
          
         }).catch(err=>{
            setSubmitError(true);
         });
}

}

//log in 

export const login=(email , password ,fun)=>{
  return dispatch=>{
    auth.signInWithEmailAndPassword(email, password).then(res=>{window.location.reload();}).catch(err=>{
      fun('error');
    })
  }
}

// log out

export const  logout =()=>{
  return  dispatch=>{
      auth.signOut().then(res=>{window.location.reload();}).catch(err=>{
      console.log(err);
    })
  }
}

// get user info
export const getUser = () => {
  return dispatch => {
    dispatch({
      type: USER__STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
         dispatch({
        type: USER__STATUS,
        payload: false
      });
  })
    }
  }

  //get the user info by his id;

 export const getInfo=(uid)=>{
   return dispatch =>{
              userDB.child(uid).on('value',(snapshot)=>{
            dispatch({
                type:USER__INFO,
                payload:snapshot.val()
            })
            })
   }
 } 


//add data to user folder like wishlist and cart
export const addData=(id,folder,uid)=>{
  console.log(id,folder,uid);
    return dispatch=>{
      userDB.child(uid).child(folder).child(id).set(id);
    }
}

// delete 
export const removeData=(id,folder,uid)=>{
  return dispatch =>{
     userDB.child(uid).child(folder).child(id).remove();   
  }
}

