// ? what is callback in javascript?


// ? example ------>

const cart = ['shoe', 'pants', 'shirts'];

api.crrateOrder(cart, function () {
    api.paymentOrder(function () {
        api.order(function () {

        })
    })

})



// ? what is callback hell in javascript?
//pyramid of doom ---> inversion of control.






