export async function taskService(workspaceId) {
    const res = await fetch(
      `http://96.9.81.187:8080/api/v1/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        headers: {
          accept: "*/*",
          Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJzb3ZhbmFyYTEyM0BnbWFpbC5jb20iLCJpYXQiOjE3NDM3NDQ3MTUsImV4cCI6MTc0MzgzMTExNX0.Qz-7trQr_rdWC9NNgvayN8myZOE62PevYXkSMap4I4GiHTpOWC0tbTIG3uIaCwwF1jsE4Fyyt7oy9UVEOjxWiQ",
        },
      }
    );
    const data = await res.json();
  
    if (+data.status === 200) {
      return data.payload; 
    }
  }
  