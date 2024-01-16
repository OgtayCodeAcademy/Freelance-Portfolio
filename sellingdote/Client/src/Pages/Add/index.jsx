import React from 'react'
import scss from './index.module.scss';
import Classnames from 'classnames';
import {useFormik} from 'formik'

const AddPage = () => {
  const containerClass = Classnames('container', scss.container)
  const onSubmit = (values, action)=> {
    console.log(values)
  }
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      image: ''
    },
    onSubmit
  })
  return (
    <>
      <div className={containerClass}>
        <form onSubmit={(e)=>{
          e.preventDefault()
          handleSubmit()
        }} action="">
          <input name='name' onChange={handleChange} type="text" placeholder='name'/>
          <input name='description' onChange={handleChange} type="text" placeholder='description'/>
          <input name='image' onChange={handleChange} type="text" placeholder='image'/>
          <input name='price' onChange={handleChange} type="number"  placeholder='price'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddPage