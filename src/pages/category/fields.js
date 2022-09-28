const fieldsArr = [
    {
      label: "Key",
      name: "key",
      validation: e => {
        const key = e.target.value;
        if (key.length > 6) {
          return false;
        } else {
          return true;
        }
      },
      error: "Enter a key name"
    },
    {
      label: "Value",
      name: "value",
      validation: e => {
        const value = e.target.value;
        if (value.length > 6) {
          return false;
        } else {
          return true;
        }
      },
      error: "Error"
    },
   
  ];
  
  export default fieldsArr;
  