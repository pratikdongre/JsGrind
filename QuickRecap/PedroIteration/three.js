const fetchData = () => {
    const promise = fetch("https://jsonplaceholder.typicode.com/posts");
  
    promise
      .then((res) => {
        // this returns another Promise
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  

  const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())     // converts to JSON
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  };