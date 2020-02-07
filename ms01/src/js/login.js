import $ from "jquery"

function login() {
    console.log($("#username").val())
    console.log($("#password").val())
    // $.ajax({
    //     type:"GET",
    //     async:false,
    // })
}
export default login;