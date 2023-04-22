fetch("http://localhost:3080/api/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "John Doe",
            email: "John Doe@gmail.com",
        })
       
    })
    .then((res) => 
    console.log(res))
            