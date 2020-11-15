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
        const reg=/.+@[^@]+\.[^@]{2,}$/
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