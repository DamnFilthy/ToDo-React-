import './app-header.css';


function AppHeader({liked, allPosts}) {
    return(
      <div className="app-header d-flex">
         <h1> Alexander Shiryaev </h1>
         <h2>{allPosts} записей, из них понравилось {liked}</h2>
      </div>
    );
  }

export default AppHeader;