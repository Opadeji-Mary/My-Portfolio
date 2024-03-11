import React from 'react'

const navbar = () => {
  return (
    <div>
     

<nav class="navbar bg-danger fixed-top">
  <div class="container-fluid">
    <h1 class="navbar-brand">Mary</h1>
    <form class="d-flex" role="search">
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" >Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </form>
  </div>
</nav>
    </div>
  )
}

export default navbar