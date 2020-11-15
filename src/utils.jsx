export const checkValidity=(value,rules,inputs)=>{
    let isValid=true;
    if(rules.required){
        isValid=value.trim() && isValid
    }
    if(rules.minLength){
        isValid=value.length >= rules.minLength && isValid
    }
    if(rules.maxLength){
        isValid=value.length <= rules.maxLength && isValid
    }
    if(rules.isEmail){
        const reg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        isValid= reg.test(value)  && isValid
    }
    if(rules.isPass){
        isValid=value.length >= rules.minLength && isValid
    }
    if(rules.isConfirm){
        isValid=value === inputs[2].value && isValid
    }
    return isValid
}