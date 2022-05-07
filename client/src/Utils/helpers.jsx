// import { message, notification } from 'antd'
import allPaths from '../Config/paths'
import Snackbar from '@mui/material/Snackbar';

const requiredMessage = (value) => `Please input your ${value}!`

const inputPlace = (value) => `Input your ${value} Here...!`

const setActiveMenu = (path) => path === allPaths.HOME ? 0 : 1

const successMessage = (desc = 'Successfully Complete!') => {
    return  ( <Snackbar
    // open={open}
    autoHideDuration={6000}
    // onClose={handleClose}
    message={desc}
    // action={action}
  />)
}

const infoMessage = (desc = 'Successfully Complete!') => {
    return  ( <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={desc}
        // action={action}
      />)
}

const errorMessage = (desc = 'Oops Something Went Wrong!') => {
    return  ( <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={desc}
        // action={action}
      />)
}

const warningMessage = (desc = 'Warning!') => {
    return  ( <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={desc}
        // action={action}
      />)
}

const successNotification = (message = 'Successfully Complete!') => {
    return  ( <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={message}
        // action={action}
      />)
}

const errorNotification = (message = 'Oops Something Went Wrong!') => {
    return  ( <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={message}
        // action={action}
      />)
}

const convertTitle = (val) => val.charAt(0).toUpperCase() + val.slice(1)

const stringLimiter = (val, limit = 50) => val?.length > limit ? `${val.slice(0, limit)}...` : val

export {
    requiredMessage,
    inputPlace,
    setActiveMenu,
    successMessage,
    infoMessage,
    errorMessage,
    warningMessage,
    successNotification,
    errorNotification,
    convertTitle,
    stringLimiter
}