export const AddWorkSpaceService = async (workspaceName) => {
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace`,{
        method: "POST",
        headers: {
            'accept': '*/*',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJsaWlwMjgzNjlAZ21haWwuY29tIiwiaWF0IjoxNzQzNjYxMTMzLCJleHAiOjE3NDM3NDc1MzN9.lbuzqMh-HgGXaMFs4QIq3qjwqc2anhM9nHxmWF1ysy0Pp9iXTQ7JRBhyjOJyTtDfoFdLXD1EF5hx35KxfSiOdA',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            workspaceName: workspaceName,
        }),
    })
    const data = await res.json();
    console.log("Data from AddWorkSpaceService",data);

}