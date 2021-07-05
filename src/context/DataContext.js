import React, { Component } from 'react'

const DataContext = React.createContext();

class DataProvider extends Component {

    state = {
        data : [],
        pageCount : 0,
        isThereAnError : false,
        error : null
    }
  
    setData = (phones) =>{
        this.setState({
            data : phones,
        })
    }

    setPageCount = (pageCount) =>{
      this.setState({
        pageCount
      })
  }

  setIsThereAnError = (value) => {
    this.setState({
      isThereAnError : value
    })
  }

  setError = (value) => {
    this.setState({
      error : value
    })
  }

  
    render() {
      const { children } = this.props;
      const { data, pageCount, isThereAnError, error } = this.state;
      const { setData,setPageCount, setIsThereAnError, setError } = this;
  
      return (
        <DataContext.Provider
          value={{
            data,
            pageCount,
            isThereAnError,
            error,
            setData,
            setPageCount,
            setIsThereAnError,
            setError
          }}
        >
          {children}
        </DataContext.Provider>
      )
    }
  }
  
  export default DataContext;
  
  export { DataProvider }