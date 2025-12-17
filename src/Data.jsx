export const API_KEY="AIzaSyCNO1RcWyTs-Y35-eKuWG3VmUn5klmYWlo"

export const value_convertor=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}