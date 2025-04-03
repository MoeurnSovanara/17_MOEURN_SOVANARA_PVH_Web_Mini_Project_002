export const GetWorkSpaceService =async () => {
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,{
        method: "GET",
        headers: {
           "accept": "*/*",
           "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJsaWlwMjgzNjlAZ21haWwuY29tIiwiaWF0IjoxNzQzNjYxMTMzLCJleHAiOjE3NDM3NDc1MzN9.lbuzqMh-HgGXaMFs4QIq3qjwqc2anhM9nHxmWF1ysy0Pp9iXTQ7JRBhyjOJyTtDfoFdLXD1EF5hx35KxfSiOdA"
        },
    });
    const data = await res.json();
    console.log(data);
}