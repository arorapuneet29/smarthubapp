import { useFormikContext } from 'formik'
import React from 'react'

import FormField from './FormField'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({ name, ...otherPropsField }) => {
  const {
    handleChange, errors, setFieldTouched, touched,
  } = useFormikContext()

  return (
    <>
      <FormField
        {...otherPropsField}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        name={name}
      />
      <ErrorMessage touched={touched[name]} error={errors[name]} />
    </>
  )
}

export default AppFormField
