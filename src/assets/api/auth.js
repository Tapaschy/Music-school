// save a user to database
export const saveUser = user => {
    const currentUser = {
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
    }
  
    fetch(`http://localhost:5000/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }