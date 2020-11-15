export const inputs=[
    {
      value:'',
      id:'0',
      validation:{
          required:true,
          minLength:5,
          maxLength:10
      },
      label:'Name',
      sub:"Enter your complete name",
      error:'Your name is not valid and must be between  5 , 10 characters' ,
      isValid:true,
      type:"text",
      name:'name'
  
    },
    {
      value:'',
      id:'1',
      validation:{
          required:true,
          isEmail:true
      },
      label:'Email',
      sub:'Enter your correct email ',
      error:'Email is not valid',
      isValid:true,
      type:"email",
      name:'email'
  
    },
    {
      value:'',
      id:'2',
      label:'Password',
      sub:"Enter password for your account",
      error:'Password is not valid and must be between  6 , 10 characters',
      validation:{
          required:true,
          isPass:true,
          minLength:6,
          maxLength:10
      },
      isValid:true,
      type:"password",
      name:'password'
  
    },
    {
     value:'',
     id:'3',
     label:'Confirm password',
     sub:"Enter your password again",
     error:'Password is not match',
     validation:{
         required:true,
         isConfirm:true,
     },
     isValid:true,
     type:"password",
     name:'password'
 
   }
  
   ]