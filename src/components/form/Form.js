import { Formik } from 'formik'
import React from 'react'

const Form = ({ children, ...otherProps }) => (
  <Formik {...otherProps}>{() => children}</Formik>
)

export default Form
