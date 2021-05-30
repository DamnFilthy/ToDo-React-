import './app-header.css';


function AppHeader({liked, allPosts, important, done}) {
    return(
      <div className="app-header d-flex flex-column align-items-center">
         <h1> ToDo List on React by Alexander Shiryaev</h1>
         {/* <h1> by Alexander Shiryaev </h1> */}
         <h2 className="header__stats">Всего: <span className="dinamic-stat-all"> {allPosts} </span>записи, из них понравилось: <span className="dinamic-stat-like"> {liked} </span> Важные: <span className="dinamic-stat-important"> {important} </span> Выполнено: <span className="dinamic-stat-done"> {done} </span></h2>
      </div>
       
    );
  }

export default AppHeader;