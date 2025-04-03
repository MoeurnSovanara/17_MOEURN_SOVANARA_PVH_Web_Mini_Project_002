export const AddWorkSpaceService = async (workspaceName) => {
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace`,{
        method: "POST",
        headers: {
            'accept': '*/*',
            'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJzb3ZhbmFyYTEyM0BnbWFpbC5jb20iLCJpYXQiOjE3NDM2ODkwNDcsImV4cCI6MTc0Mzc3NTQ0N30.pYXsqCMoDUsfWiQIiXtzf9v1M2XKkzzunJGn_cUjNWvXjoJ8NLt7eVn9qPMJFOeVR74JU6oGDu7qXPARnwVldg',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            workspaceName: workspaceName,
        }),
    })
    const data = await res.json();
    console.log("Data from AddWorkSpaceService",data);

}