const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

async function run() {
    const user = new User({ name: "Kyle", age: 26 })
    await user.save()
    console.log(user)
}
run()