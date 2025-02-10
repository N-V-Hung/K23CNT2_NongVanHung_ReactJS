function fn_rest_param(a,b,...other){
    console.log("a=",a);
    console.log("b=",b);
    console.log("...other=",other);
}

fn_rest_param(1,3);
fn_rest_param(1,3,5);
fn_rest_param(1,3,5,3,6,78,9,);