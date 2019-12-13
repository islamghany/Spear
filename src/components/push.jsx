import React  from 'react'
import useForm from 'react-hook-form';
import {addItem} from '../actions/index';
import {connect} from 'react-redux';
function Push(props) {
    const { register, handleSubmit} = useForm();
    const onSubmit = (e)=>{
           props.addItem(e);
           console.log(e);
    }
    return (
        <div>
           <div className="form__wrapper">
               <div className="form">
                   <div className="form__container">
                   <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className="form__input" placeholder="name" name="name" ref={register}  /> 
                        <input type="text" className="form__input" placeholder="img1" name="img1" ref={register}  />
                        <input type="text" className="form__input" placeholder="img2" name="img2" ref={register}  />
                        <input type="text" className="form__input" placeholder="price" name="price" ref={register}  />
                        <input type="text" className="form__input" placeholder="sale" name="sale" ref={register}  />
                        <input type="text" className="form__input" placeholder="salePer" name="salePer" ref={register}  />
                        <input type="text" className="form__input" placeholder="gender" name="gender" ref={register}  />
                        <input type="text" className="form__input" placeholder="fav" name="fav" ref={register}  />
                        <input type="text" className="form__input" placeholder="desc" name="desc" ref={register}  />
                        <input type="text" className="form__input" placeholder="selling" name="selling" ref={register}  />
                        <input type="text" className="form__input" placeholder="color" name="color" ref={register}  />
                        <input type="text" className="form__input" placeholder="type" name="type" ref={register}  />
                        <button className="btn btn--contained-primary circle">Submit</button> 
                       </form>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default connect(null,{addItem})(Push);
